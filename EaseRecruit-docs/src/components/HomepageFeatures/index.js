import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Seamless Onboarding',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        Ease Recruit is built to ensure effortless setup and integration, allowing you to streamline your recruitment process and get your platform operational in no time.
      </>
    ),
  },
  {
    title: 'Focus on Hiring',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
         Ease Recruit lets you concentrate on finding the best talent, while we handle the backend logistics. Simply organize your job postings and applications with ease.
      </>
    ),
  },
  {
    title: 'Powered by Modern Web Technologies',
    Svg: require('@site/static/img/4.svg').default,
    description: (
      <>
        Leverage the flexibility of React to extend and personalize your recruitment platform. Ease Recruit allows you to modify layouts while keeping a consistent experience with reusable components.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
