import Link from 'next/link'
import Header from '../../components/header'

import blogStyles from '../../styles/blog.module.css'
import sharedStyles from '../../styles/shared.module.css'

import { getBlogLink, getTagLink, getBeforeLink } from '../../lib/blog-helpers'

//import { textBlock } from '../../lib/notion/renderers'
import { getPosts, getFirstPost, getAllTags } from '../../lib/notion/client'

export async function getStaticProps() {
  const posts = await getPosts()
  const firstPost = await getFirstPost()
  const tags = await getAllTags()

  return {
    props: {
      posts,
      firstPost,
      tags,
    },
    revalidate: 60,
  }
}

const RenderPosts = ({ posts = [], firstPost, tags = [] }) => {
  return <>
    <Header path="/blog" titlePre="Blog" />

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
                  {tag}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  </>;
}

export default RenderPosts
