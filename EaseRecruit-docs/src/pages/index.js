import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { IoArrowForwardCircle } from "react-icons/io5";
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { Typewriter } from 'react-simple-typewriter'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p  className="hero__subtitle" style={{ paddingBottom: '2rem', margin: 'auto 0', fontWeight: 'normal' }}>
        {siteConfig.tagline}{' '}
        <span style={{ color: '', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Talent 💫', 'Opportunity 🏆', 'Future 🚀', 'Success 🎉']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
            
          />
        </span>
      </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg flex items-center"
            to="/docs/intro">
            Ease Recruit Tutorial <IoArrowForwardCircle />
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
