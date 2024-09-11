import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Old Position & Experience',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <> 
      <div className="text--center">
      <img src={require('./tcetOpenSource.png').default} width="100px" />
      </div>
        Worked in documentation team as a <strong>Summer Intern</strong> in my first year in <strong> <a href="https://github.com/tcet-opensource">TCET Open Source</a></strong> and promoted to <strong><a href="https://github.com/orgs/tcet-opensource/discussions/3">Executive Director of the Documentation Team.</a></strong>
      </>
    ),
  },
  {
    title: 'Flag Ship Projects',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      <div className="text--center">
      <img src={require('./FlagshipProjects.png').default} width="175px" />
      </div>
        <strong><a href="https://github.com/MJ665/mj665.github.io">Portfolio Webpage</a></strong>, <strong>Internet Banking Simulation</strong> and <strong>Course Selling Website.</strong> 
      </>
    ),
  },
  {
    title: 'Resume',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      <div className="text--center">
      <img src={require('./resumeGraphic.png').default} width="125px" />
      </div>
        Visit my up to date <strong>resume</strong>.
        <div>

      <h3><button type="button" class="btn btn-primary display--1"> <a href="https://docs.google.com/document/d/1cVICbw8oGtTHjICeoM5jAZzpx95A4IOZBn1639skvVM/edit?usp=sharing"> Resume 💾</a></button></h3>
        </div>

     
      </>
    ),
  },
];

function Feature({ title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        {/* <p>{description}</p> */}
      {description}
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
