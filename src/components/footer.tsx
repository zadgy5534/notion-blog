import ExtLink from './ext-link'

export default () => (
  <>
    <footer>
      <span>Also Visit:</span>
      <ExtLink href="https://www.medieviste.org">
        <img
          src="https://www.medieviste.org/wp/wp-content/uploads/leaf1.gif"
          height={46}
          width={132}
          alt="Humanity Study Site"
        />
      </ExtLink>
      <span>
        and{' '}
        <ExtLink href="https://medieviste.org">
          Subscribe to the mail magazine "Silva Speculationis"
        </ExtLink>
      </span>
    </footer>
  </>
)
