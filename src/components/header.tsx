import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
  // { label: 'Contact', page: '/contact' },
  // { label: 'Source Code', link: 'https://github.com/ijjk/notion-blog' },
]

//const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'
const defaultUrl = 'https://deltgraphos.com'
const defaultTitle = 'Deltographos :: Blog'

const Header = ({
  path = '',
  titlePre = '',
  description = '',
  ogImageUrl = '',
}) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} Deltographos - Blog</title>
        <meta
          name="description"
          content="An example Next.js site using Notion for the blog"
        />
        <meta property="og:url" content={`${defaultUrl}${path}`} />
        <meta name="og:title" content={!titlePre ? defaultTitle : titlePre} />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@sxolastikos" />
        <meta
          name="twitter:card"
          content={!ogImageUrl ? 'summary' : 'summary_large_image'}
        />
        <meta name="twitter:image" content={ogImageUrl} />
        <link rel="canonical" href={`${defaultUrl}${path}`} />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
