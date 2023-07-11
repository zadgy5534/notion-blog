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
        Archive: Notionでのアーカイブ: 
        <ExtLink href="https://deltographos.notion.site/">
          "deltographos.notion.site"
        </ExtLink>
      </span>
      <p></p>
      <span>
        Gallery: アートコーディングの
        <ExtLink href="https://deltographos.notion.site/956aa8e7eb7a46ffbeafa5d375bc3a1c?v=0e54551eeadf4fdcbc556795ba7c31fa">
          まとめページ（2023年から）
        </ExtLink>
        もご覧ください。
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
