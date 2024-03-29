import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { NUMBER_OF_POSTS_PER_PAGE } from '../../../lib/notion/server-constants'
import Header from '../../../components/header'
import blogStyles from '../../../styles/blog.module.css'
import sharedStyles from '../../../styles/shared.module.css'

import {
  getBlogLink,
  getTagLink,
  getBeforeLink,
} from '../../../lib/blog-helpers'
import {
  getPosts,
  //getRankedPosts,
  getPostsBefore,
  getFirstPost,
  getAllTags,
} from '../../../lib/notion/client'

export async function getStaticProps({ params: { date } }) {
  if (!Date.parse(date) || !/\d{4}-\d{2}-\d{2}/.test(date)) {
    return { notFound: true }
  }

  const posts = await getPostsBefore(date, NUMBER_OF_POSTS_PER_PAGE)
  const firstPost = await getFirstPost()
  //const rankedPosts = await getRankedPosts()
  const tags = await getAllTags()

  return {
    props: {
      date,
      posts,
      firstPost,
      //rankedPosts,
      tags,
    },
    revalidate: 3600,
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()
  const path = getBeforeLink(posts[posts.length - 1].Date)

  // only latest 1 page will be returned in order to reduce build time
  return {
    paths: [path],
    fallback: 'blocking',
  }
}

const RenderPostsBeforeDate = ({
  date,
  posts = [],
  firstPost,
  rankedPosts = [],
  tags = [],
  redirect,
}) => {
  const router = useRouter()

  useEffect(() => {
    if (redirect && !posts) {
      router.replace(redirect)
    }
  }, [router, redirect, posts])

  // if you don't have a post at this point, and are not
  // loading one from fallback then  redirect back to the index
  if (!posts) {
    return (
      <div className={blogStyles.post}>
        <p>
          Woops! did not find the posts, redirecting you back to the blog index
        </p>
      </div>
    )
  }

  return <>
    <Header
      path={getBeforeLink(date)}
      titlePre={`${date}より前の記事`}
      //description={`${date}より前の記事`}
    />
    <div className={`${blogStyles.flexContainer}`}>
      <div className={`${sharedStyles.layout} ${blogStyles.blogIndex}`}>
        {posts.length === 0 && (
          <p className={blogStyles.noPosts}>There are no posts yet</p>
        )}
        {posts.map(post => {
          return (
            <div className={blogStyles.postPreview} key={post.Slug}>
              {post.Date && (
                <div className="posted">📅&nbsp;&nbsp;{post.Date}</div>
              )}
              <h3>
                <div className={blogStyles.titleContainer}>
                  <Link
                    href="/blog/[slug]"
                    as={getBlogLink(post.Slug)}
                    passHref
                  >
                    {post.Title}
                  </Link>
                </div>
              </h3>
              <div className={blogStyles.tagContainer}>
                {post.Tags &&
                  post.Tags.length > 0 &&
                  post.Tags.map(tag => (
                    (<Link
                      href="/blog/tag/[tag]"
                      as={getTagLink(tag)}
                      key={`${post.Slug}-${tag}`}
                      passHref
                      className={blogStyles.tag}>
                      🔖{tag}
                    </Link>)
                  ))}
              </div>
              <p>{post.Excerpt}</p>
              {/* <Link href="/blog/[slug]" as={getBlogLink(post.Slug)} passHref>
                <a className={blogStyles.expandButton}>続きを読む</a>
              </Link> */}
            </div>
          );
        })}
        {firstPost.Date !== posts[posts.length - 1].Date && (
          <div className={blogStyles.nextContainer}>
            <hr />
            <Link
              href="/blog/before/[date]"
              as={getBeforeLink(posts[posts.length - 1].Date)}
              passHref
              className={blogStyles.nextButton}>
              次のページ ＞
            </Link>
          </div>
        )}
      </div>
    </div>
  </>;
}

export default RenderPostsBeforeDate
