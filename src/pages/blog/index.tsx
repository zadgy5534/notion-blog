import Link from 'next/link'
import Header from '../../components/header'

import blogStyles from '../../styles/blog.module.css'
import sharedStyles from '../../styles/shared.module.css'

import { getBlogLink, getTagLink } from '../../lib/blog-helpers'

import { textBlock } from '../../lib/notion/renderers'
import { getPosts, getAllTags } from '../../lib/notion/client'

export async function getStaticProps() {
  const posts = await getPosts()
  const tags = await getAllTags()

  return {
    props: {
      posts,
      tags,
    },
    unstable_revalidate: 10,
  }
}

export default ({ posts = [], tags = [] }) => {
  return (
    <>
      <Header titlePre="Blog" />

      <div className={`${sharedStyles.layout} ${blogStyles.blogIndex}`}>
        <h1>Deltographos :: Blog</h1>
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
                    <a>{post.title}</a>
                  </Link>
                </div>
              </h3>

              <div className={blogStyles.tagContainer}>
                {post.Tags &&
                  post.Tags.length > 0 &&
                  post.Tags.map(tag => (
                    <Link
                      href="/blog/tag/[tag]"
                      as={getTagLink(tag)}
                      key={`${post.Slug}-${tag}`}
                      passHref
                    >
                      <a className={blogStyles.tag}>🔖{tag}</a>
                    </Link>
                  ))}
              </div>
              <p>{post.Excerpt}</p>
            </div>
          )
        })}
      </div>
      <div className={blogStyles.tagIndex}>
        <h3>タグ</h3>
        {tags.length === 0 && (
          <div className={blogStyles.noTags}>There are no tags yet</div>
        )}
        {tags.length > 0 && (
          <ul>
            {tags.map(tag => {
              return (
                <li key={tag}>
                  <Link href="/blog/tag/[tag]" as={getTagLink(tag)} passHref>
                    <a>{tag}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </>
  )
}
