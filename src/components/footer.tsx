import React from 'react'
import ExtLink from './ext-link'
//import Link from 'next/link'

const Footer = () => (
  <>
    <footer>
      <span>
        Home: このページです。 
      </span>
      <p></p>
      <span>
        Deltographos::Blog: 2023年からの新規ブログです―テックポエム系
        <ExtLink href="https://bib.deltographos.com/">
          "bib.deltographos.com"
        </ExtLink><br></br>
        <ExtLink href="https://bib.deltographos.com/feed">Feed登録はこちら</ExtLink>
      </span>
      <p></p>
      <span>
        Medieviste.org:  過去記事のセレクションを含む旧来からのブログです―書評系
        <ExtLink href="https://www.medieviste.org/">
          "www.medieviste.org"
        </ExtLink><br></br>
        <ExtLink href="https://www.medieviste.org/?feed=rss2">RSS登録はこちら</ExtLink>
      </span>
      <p></p>
      <span>
        Gallery: アートコーディング作品集です。
        <ExtLink href="https://deltographos.notion.site/956aa8e7eb7a46ffbeafa5d375bc3a1c?v=0e54551eeadf4fdcbc556795ba7c31fa&pvs=4">
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
