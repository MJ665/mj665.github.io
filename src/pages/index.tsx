import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';











function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
<>
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        <h1 className="hero__title">Welcome To My Portfolio Webpage</h1>
        <p className="hero__subtitle">{siteConfig.tagline} <br/>Aspiring to develop innovative software solutions</p>
        <img src="/img/meets-photo.png" alt="" srcset="" width="300px"/>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            💾 🖥️ Start Reading 📂  💻
          </Link>
        </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      </div>
    </header>





<div className="container">
  <div className={clsx("padding-vert--xl",styles.sectionAlt)}>
    <div className="container">
      <div className="row">
    <div className="col col--8 col--offset-2">

    <div>
      <img height={"20px"} src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" alt="Meet's gif" />

      <div id="user-content-toc">
        <ul style={{textAlign: "center"}}>
          <summary><h1 style={{display: "inline-block"}}>Hi 👋, I'm Meet</h1></summary>
        </ul>
      </div>


      <p>
        - 🔭 I’m currently working on Internet Banking Simulation Website & Course Selling Website
      </p>

      <p>
        - 🌱 I’m currently studying Machine Learning.
      </p>

      <p>
        - ☁️ I've keen interest in Artificial Intelligence and Machine Learning. So,I'm actively learning Tensor Flow!
      </p>


      <p>
        - 📫 Feel free to reach me out <a href="mailto:contact.hackathonmj@gmail.com">contact.hackathonmj@gmail.com</a> 
      </p>

    
      <hr />
      
</div>


<br />
      <h2 className="text--center text-margin--lg">
        <span className="badge badge--primary">Who am I?</span>
      </h2>
      <h3 className="text--center text-margin-lg">
      A Web Developer, Open Source, Machine Learning & Data Science enthusiast who loves to learn and create stunning functional websites & ML Models most of the time.
      </h3>
      <p>
      I am <strong>Meet Jain</strong> in my third year of engineering student at Thakur college of engineering, Mumbai also enrolled in Diploma Level IIT Madras online BS Degree program. I have enrolled in the given subjects Machine Learning Foundation, Machine Learning Techniques, Bussiness Data Management and Bussiness Data Management Project.  I’m deeply passionate about development and continuously seek new opportunities to enhance my skills and make significant contributions. My core strengths include punctuality, confidence, leadership, and a keen interest in emerging technologies.
      </p>


    <div>
      
      <h2 className="text--left text-margin--lg ">
        <span className="badge badge--primary">Projects</span>
      </h2>

    </div>
      

<ul>
<li>Course Selling Website: Under development</li>
<li>Internet Banking Simulation Website: Under development</li>
<li>Portfolio Webpage: Showcases my work, blogs, documentation, achievements, and announcements</li>

</ul>

      



  

      <h2 className="text text--right text-margin--lg  ">
        <span className="badge badge--primary ">Significant Achivements</span>
      </h2>


      


<ol>
<li><a href="/achievements/iitm-foundation-level">
       <strong>

     Completed Foundation Level of the IIT Madras BS Degree:
       </strong>
     </a> Successfully passed foundational courses in Data Science and Applications, including Statistics for Data Science II, English II, English I, Statistics for Data Science I, Mathematics for Data Science I, Mathematics for Data Science II, Programming in Python, and Computational Thinking.</li>
<li><a href="/achievements/tcet-open-source">
<strong>Advanced from Summer Intern to Executive Director at TCET Open Source:</strong>
</a>
   Progressed from an internship position to the role of Executive Director of the Documentation Team. Led efforts to enhance documentation practices and managed a team to ensure high standards of clarity and accuracy.</li>
<li><a href="/achievements/completed-certificates">
<strong>
  
  Completed 12+ Coding and Technical Certifications
  </strong></a>

</li>


</ol>

    <div>
      
      <h2 className="text--left text-margin--lg ">
        <span className="badge badge--primary">Education</span>
      </h2>

    </div>
      

<ul>
<li>Thakur College of Engineering and Technology, Mumbai: Third Year, Bachlor of Technology in Artificial Intelligence and Machine Learning. 2026' CGPA - 9.62</li>
<li>IIT, Madras: Diploma Level- Bachelor of Science (BS) Degree in Data Science and Applications Sem  CGPA - 7</li>
<li>Class 12 -Mar 2022 86.50%</li>
<li>Class 10 -Mar 2020 86.40%</li>
</ul>



<a href="https://holopin.io/@mj123">
        <img src="https://holopin.me/mj123" alt="An image of @mj123's Holopin badges, which is a link to view their full Holopin profile" />
      </a>

   

      <h3>Skills & Understanding Of</h3>

      <p>
        • JavaScript | TypeScript | C++ | C | Python | Tailwind CSS | Node JS | Express | React | jQuery | NoSQL | SQL | Postgres | MongoDB | MySQL | Git | Github | HTML | CSS | Bootstrap | Handlebars | Java | Power BI | MS Office
      </p>

      <p>
        • React | Next | AWS | CI/CD | Docusaurus | Docker | Nginx and reverse proxies |  ZOD | Monorepo | Turborepo | OpenAPI Spec | ORM | Prisma | Next Auth | Authentication using external libraries | Scaling Node.js | Linux | OOP | Digital Ocean | Photoshop | Postman | Google Cloud | System Design | Operating System | Data Structures | Search Engine Optimization
      </p>

      <p>
        • Backend | Frontend | Full-Stack | System Design | Technical Writing and Documentation | Open Source | Devops | System Administrator
      </p>


     
      <img height={"20px"} src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" alt="Meet's gif" />
    


    </div>

      </div>

    </div>
  </div>

</div>






    </>
  );
}







export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      title={`Hello 👋 form Meet`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ContactForm />
      </main>
    </Layout>
  );
}


import ContactForm from '../components/HomepageFeatures/ContactForm';







// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home(): JSX.Element {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }




