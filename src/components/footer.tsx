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
        姉妹サイト{' '}
        <ExtLink href="https://www.medieviste.org">medieviste.org</ExtLink>
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
        メルマガ休止中。
        <p>"Silva Speculationis"</p>
      </span>
    </footer>
  </>
)
