import React from 'react'
import ExtLink from './ext-link'
//import Link from 'next/link'

const Footer = () => (
  <>
    <footer>
      <span>
        Home: このページです。 ブログのRSS / Feedの
        <ExtLink href="https://bib.deltographos.com/feed">登録はこちら</ExtLink>
      </span>
      <p></p>
      <span>
        New Blog: ブログです。 
        <ExtLink href="https://bib.deltographos.com/">
          "bib.deltographos.com"
        </ExtLink>
      </span>
      <p></p>
      <span>
        Archive:  過去記事のセレクションを掲載しています。
        <ExtLink href="https://www.medieviste.org/">
          "www.medieviste.org"
        </ExtLink>
      </span>
      <p></p>
      <span>
        Gallery: アートコーディング作品集です。
        <ExtLink href="https://deltographos.notion.site/">
          "deltographos.notion.site" 
        </ExtLink>
      </span>
      <ExtLink href="https://www.medieviste.org">
        <img
          src="https://www.medieviste.org/wp/wp-content/uploads/leaf1.gif"
          height={46}
          width={132}
          alt="Humanity Study Site"
        />
      </ExtLink>
      <span>
        <p>
        </p>
      </span>
    </footer>
  </>
)

export default Footer
