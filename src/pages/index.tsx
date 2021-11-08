import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

const renderBody = () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      {/* <img
        src="/vercel-and-notion.png"
        height="85"
        width="250"
        alt="Vercel + Notion"
      /> */}
      <h1>Deltographos</h1>
      <h2>
        powered by Notion Blog
        {/*  <ExtLink
            href="https://github.com/vercel/next.js/issues/9524"
            className="dotted"
            style={{ color: 'inherit' }}
          ></ExtLink> */}
      </h2>

      <div className="explanation">
        <p></p>

        <p>
          <ExtLink href="">
            <img
              src="https://www.medieviste.org/wp/wp-content/uploads/sakura_01.gif"
              height={128}
              width={132}
              alt="Humanity and Engineering Fan"
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

export default renderBody
