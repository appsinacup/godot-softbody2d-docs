import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import animation from '/static/img/godot_softbody.gif'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <svg height="128" viewBox="0 0 16 16" width="128" xmlns="http://www.w3.org/2000/svg">
          <path d="m2 1s-3 5 0 7-1 7-1 7h13s3-6 0-8 1-6 1-6zm2 2h7s-2 3 1 5 0 5 0 5h-7s2-4-1-6 0-4 0-4z" fill="#8da5f3" stroke="black" stroke-width="0.5"/>
        </svg>

        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p style={{textAlign: 'center'}}><img 
          src={animation} 
          alt="loading..." 
          width={256} 
          style={{
            marginRight: '64px', 
            display: 'block', 
            margin: '0 auto',
            border: 'solid 10px #8da5f3', 
            borderRadius: '10px',
            boxShadow: '0 0 0 4px black'
          }}
        /></p>
        
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Tutorial - 5min ⏱️
          </Link>
          </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Softbody2D addon for Godot that offers squishy and breakable softbodies.">
      <HomepageHeader />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
