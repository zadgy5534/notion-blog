// use commonjs so it can be required without transpiling
const path = require('path')

const normalizeId = id => {
  if (!id) return id
  if (id.length === 36) return id
  if (id.length !== 32) {
    throw new Error(
      `Invalid blog-index-id: ${id} should be 32 characters long. Info here https://github.com/ijjk/notion-blog#getting-blog-index-and-token`
    )
  }
  return `${id.substr(0, 8)}-${id.substr(8, 4)}-${id.substr(12, 4)}-${id.substr(
    16,
    4
  )}-${id.substr(20)}`
}

//for unoffical api
const NOTION_TOKEN = process.env.NOTION_TOKEN
const BLOG_INDEX_ID = normalizeId(process.env.BLOG_INDEX_ID)
const API_ENDPOINT = 'https://www.notion.so/api/v3'

// for official API
const NOTION_API_SECRET = process.env.NOTION_API_SECRET
const DATABASE_ID = process.env.DATABASE_ID

const BLOG_INDEX_CACHE = path.resolve('.blog_index_data')

const NUMBER_OF_POSTS_PER_PAGE = 10

module.exports = {
  NOTION_TOKEN,
  BLOG_INDEX_ID,
  API_ENDPOINT,
  NOTION_API_SECRET,
  DATABASE_ID,
  BLOG_INDEX_CACHE,
  NUMBER_OF_POSTS_PER_PAGE,
}
