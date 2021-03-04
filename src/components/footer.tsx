import ExtLink from './ext-link'

export default () => (
  <>
    <footer>
      <span>
        <p>
        <ExtLink href="https://deltographos.com/atom">
          Atom Feed
        </ExtLink>
        </p>
      </span>
      <span>Also Visit {' '}
        <ExtLink href="https://www.medieviste.org">
        medieviste.org
        </ExtLink></span>
      <ExtLink href="https://www.medieviste.org">
        <img
          src="https://www.medieviste.org/wp/wp-content/uploads/leaf1.gif"
          height={46}
          width={132}
          alt="Humanity Study Site"
        />
      </ExtLink>
      <span>
        and subscribe to the mail magazine
        <p>"Silva Speculationis"</p>
      </span>
    </footer>
  </>
)
