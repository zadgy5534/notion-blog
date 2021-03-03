import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        src="/vercel-and-notion.png"
        height="85"
        width="250"
        alt="Vercel + Notion"
      />
      <h1>Deltographos Blog</h1>
      <h2>
        Blazing Fast Notion Blog with Next.js'{' '}
        <ExtLink
          href="https://github.com/vercel/next.js/issues/9524"
          className="dotted"
          style={{ color: 'inherit' }}
        >
          SSG
        </ExtLink>
      </h2>

      <Features />

      <div className="explanation">
        <p>
        <ExtLink href="">
        <img
          src="https://www.medieviste.org/wp/wp-content/uploads/leaf1.gif"
          height={128}
          width={132}
          alt="Humanity Fan"
        />
        </ExtLink>
        </p>

        <p>
        <ExtLink href="">
        <img
          src="https://www.medieviste.org/wp/wp-content/uploads/Wave1.gif"
          height={128}
          width={132}
          alt="Weekend Coder and Occasional Lutenist"
        />
        </ExtLink>
        </p>
      </div>
    </div>
  </>
)
