import ExtLink from './ext-link'
//import Link from 'next/link'

const Footer = () => (
  <>
    <footer>
      <span>
        <ExtLink href="https://deltographos.com/atom">RSS/Atom Feed</ExtLink>
      </span>
      <p></p>
      <span>
        過去記事は定期的に
        <ExtLink href="https://deltographos.notion.site/">
          "deltographos.notion.site"
        </ExtLink>
        にまとめています。
      </span>
      <span>
        generative art codingの
        <ExtLink href="https://deltographos.notion.site/956aa8e7eb7a46ffbeafa5d375bc3a1c?v=0e54551eeadf4fdcbc556795ba7c31fa">
          "まとめページ（2023年から）"
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
          姉妹サイト："Silva Speculationis"（2020年まで）
          <ExtLink href="https://www.medieviste.org">(medieviste.org)</ExtLink>
          もどうぞ。
        </p>
      </span>
    </footer>
  </>
)

export default Footer
