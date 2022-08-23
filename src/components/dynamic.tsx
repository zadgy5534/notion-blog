import dynamic from 'next/dynamic'
import ExtLink from './ext-link'

export default {
  // default tags
  ol: 'ol',
  ul: 'ul',
  li: 'li',
  p: 'p',
  blockquote: 'blockquote',
  a: ExtLink,

  Code: dynamic(() => import('./code')),
  Counter: dynamic(() => import('./counter')),
  //Callout: dynamic(() => import('./callout')),
  Equation: dynamic(() => import('./equation')),
  TweetEmbed: dynamic(() => import('./tweet-embed')),
  Bookmark: dynamic(() => import('./bookmark')),
  Video: dynamic(() => import('./video')),
}
