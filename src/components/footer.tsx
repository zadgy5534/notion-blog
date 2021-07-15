import ExtLink from './ext-link'

export default () => (
  <>
    <footer>
      <span>
        <p>
          <ExtLink href="https://deltographos.com/atom">Atom Feed</ExtLink>
        </p>
      </span>
      <span>
        このブログの過去記事一覧 →　
        <ExtLink
          href="https://deltographos.notion.site/Blog-bd6e66ce557c49a9ba33d6cf1ed143ad"
          style={{ color: 'inherit' }}
        >
          Notionの公開ページ
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
          姉妹サイト："Silva Speculationis"
          <ExtLink href="https://www.medieviste.org">(medieviste.org)</ExtLink>
        </p>
      </span>
    </footer>
  </>
)
