import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'New Blog', link: 'https://bib.deltographos.com' },
  { label: 'Archive', link: 'https://www.medieviste.org' },
  { label: 'Gallery', link: 'https://deltographos.notion.site/Ameba-form-120fb40006fa80e78cb5eb8ac886da0c?pvs=4' }
  // { label: 'Contact', page: '/contact' },
  // { label: 'Source Code', link: 'https://github.com/ijjk/notion-blog' },
]

//const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'
const defaultUrl = 'https://deltgraphos.com'
const defaultTitle = 'Deltographos - Blog'

const Header = ({
  path = '',
  titlePre = '',
  ogImageUrl = '',
}) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>
          {titlePre ? `${titlePre} |` : 'Deltographos - Blog'} Deltographos -
          Blog
        </title>
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
        <link
          rel="alternate"
          type="application/atom+xml"
          href="/atom"
          title="Atom Feed"
        />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              (<Link href={page} className={pathname === page ? 'active' : undefined}>

                {label}

              </Link>)
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header
