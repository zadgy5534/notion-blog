import ExtLink from './ext-link'
import Link from 'next/link'

const renderFoot = () => (
  <>
    <footer>
      <span>
        <ExtLink href="https://deltographos.com/atom">RSS/Atom Feed</ExtLink>
      </span>
      <span>
        過去記事は定期的に
        <ExtLink href="https://deltographos.notion.site/">
          "deltographos.notion.site"
        </ExtLink>
        にまとめています。
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
          姉妹サイト："Silva Speculationis"
          <ExtLink href="https://www.medieviste.org">(medieviste.org)</ExtLink>
        </p>
      </span>
    </footer>
  </>
)

export default renderFoot
