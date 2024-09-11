---
slug: portfolio-website
title: Portfolio Website
authors: [MJ665]
tags: [Portfolio Website]
description: Portfolio Website
keywords: [Portfolio Website]
---



**Link to Repository:** [GitHub Repository](https://github.com/MJ665/mj665.github.io)

### Introduction

This documentation provides an overview of my portfolio website, detailing the structure, components, and code used to create a dynamic and engaging online presence. The website serves as a showcase of my work, achievements, and ongoing projects. It features a clean layout, interactive elements, and comprehensive sections that highlight my skills, education, and significant accomplishments.

### Overview

The portfolio website is built using Docusaurus, a modern static website generator designed for documentation. It leverages React components and CSS modules to create a responsive and visually appealing site.




## Project Structure

### 1. `src/pages/index.tsx`

This file is the main entry point of the portfolio website and renders the homepage layout.

**Code:**

```tsx
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
          <h1 className="hero__title">Welcome To My Portfolio Webpage</h1>
          <p className="hero__subtitle">{siteConfig.tagline} <br/>To be developer of multiple software solutions</p>
          <img src="/img/Myproject.png" alt="" width="300px"/>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              💾 🖥️ Start Reading 📂  💻
            </Link>
          </div>
        </div>
      </header>

      <div className="container">
        <div className={clsx("padding-vert--xl", styles.sectionAlt)}>
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
                  <p>- 🔭 I’m currently working on Internet Banking Simulation Website & Course Selling Website</p>
                  <p>- 🌱 I’m currently studying Machine Learning.</p>
                  <p>- ☁️ I've keen interest in Artificial Intelligence and Machine Learning. So, I'm learning Tensor Flow!</p>
                  <p>- 📫 Feel free to reach me out <a href="mailto:contact.hackathonmj@gmail.com">contact.hackathonmj@gmail.com</a></p>
                  <hr />
                </div>
                <h2 className="text--center text-margin--lg">
                  <span className="badge badge--primary">Who am I?</span>
                </h2>
                <h3 className="text--center text-margin-lg">
                  A Web Developer, Open Source, Machine Learning & Data Science enthusiast who loves to learn and create stunning functional websites & ML Models most of the time.
                </h3>
                <p>
                  I am <strong>Meet Jain</strong> in my third year of engineering student at Thakur college of engineering, Mumbai also enrolled in foundation level IIT Madras online BS Degree program. I am very passionate about development, Machine Learning & Datascience and eager achieve something extraordinary in life. I always try to learn something new, always in search of new opportunities to participate in different programs, remain to be consistent towards my work and academics and always try to be a progressive person. My Qualities- punctuality, confidence, leader, and curious about new tech.
                </p>
                <div>
                  <h2 className="text--left text-margin--lg ">
                    <span className="badge badge--primary">Projects</span>
                  </h2>
                  <ul>
                    <li>Course Selling Website (under development).</li>
                    <li>Internet Banking Simulation Website (under development).</li>
                    <li>Portfolio Webpage: Displays all my work, blogs and documentation of my work, blog, achievements, and announcements.</li>
                  </ul>
                </div>
                <h2 className="text text--right text-margin--lg">
                  <span className="badge badge--primary">Significant Achievements</span>
                </h2>
                <ol>
                  <li>Cleared Foundation Level of the IITM BS Degree program for data science and its application</li>
                  <li>TCET Open Source Summer Intern Documentation Team and promoted to executive director of the team</li>
                </ol>
                <div>
                  <h2 className="text--left text-margin--lg ">
                    <span className="badge badge--primary">Education</span>
                  </h2>
                  <ul>
                    <li>Thakur College of Engineering and Technology, Mumbai: Third Year, Bachelor of Technology in Artificial Intelligence and Machine Learning. 2026' CGPA - 9.62</li>
                    <li>IIT, Madras: Foundation Level- Bachelor of Science (BS) Degree in Data Science and Applications Sem CGPA - 7.33</li>
                    <li>Class 12 - Mar 2022 86.50%</li>
                    <li>Class 10 - Mar 2020 86.40%</li>
                  </ul>
                </div>
                <a href="https://holopin.io/@mj123">
                  <img src="https://holopin.me/mj123" alt="An image of @mj123's Holopin badges, which is a link to view their full Holopin profile" />
                </a>
                <h3>Skills & Understanding Of</h3>
                <p>
                  • JavaScript | TypeScript | C++ | C | Python | Tailwind CSS | Node JS | Express | React | jQuery | NoSQL | SQL | Postgres | MongoDB | MySQL | Git | Github | HTML | CSS | Bootstrap | Handlebars | Java | Power BI | MS Office
                </p>
                <p>
                  • React | Next | AWS | CI/CD | Docusaurus | Docker | Nginx and reverse proxies | ZOD | Monorepo | Turborepo | OpenAPI Spec | ORM | Prisma | Next Auth | Authentication using external libraries | Scaling Node.js | Linux | OOP | Digital Ocean | Photoshop | Postman | Google Cloud | System Design | Operating System | Data Structures | Search Engine Optimization
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
      title={`Hello 👋 from Meet`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <ContactForm />
      </main>
    </Layout>
  );
}
```

**Description:**

- `HomepageHeader`: This component renders the hero section of the homepage, including a welcome message, an image, and a call-to-action button.
- `Home`: This is the main component that uses `Layout` to structure the page and includes `HomepageHeader`, `HomepageFeatures`, and `ContactForm`.

### 2. `src/pages/index.module.css`

This CSS module is used for styling the homepage.

**Code:**

```css
.heroBanner {
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

@media screen and (max-width: 996px) {
  .heroBanner {
    padding: 2rem;
  }
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

**Description:**

- `.heroBanner`: Styles the hero banner section, including padding and text alignment.
- `.buttons`: Centers the buttons within the hero section.

### 3. `src/css/custom.css`

This file contains global CSS overrides and theme-specific styling.

**Code:**

```css
:root {
  --ifm-color-primary: #0093d7;
  --ifm-color-primary-dark: #1eaace;
  --ifm-color-primary-darker: #11b2e8;
  --ifm-color-primary-darkest: #0693ff;
  --ifm-color-primary-light: #0095d4;
  --ifm-color-primary-lighter: #0fd7ff;
  --ifm-color-primary-lightest: #20ddda;
  --ifm-code-font-size: 95%;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.1);
}

[data-theme='dark']

 {
  --ifm-color-primary: #fabf00;
  --ifm-color-primary-dark: #f1f502;
  --ifm-color-primary-darker: #ffff00;
  --ifm-color-primary-darkest: #f7fb00;
  --ifm-color-primary-light: #29d5b0;
  --ifm-color-primary-lighter: #00ffd0;
  --ifm-color-primary-lightest: #4fddbf;
  --docusaurus-highlighted-code-line-bg: rgba(0, 0, 0, 0.3);
}

html[data-theme='light'] .hero {
  background-image: url("/static/img/hero-light-image.jpeg");
  background-size: cover;
  background-position: center;
}

html[data-theme='dark'] .hero {
  background-image: url("/static/img/hero-dark-image.jpeg");
  background-size: cover;
  background-position: center;
}
```

**Description:**

- Customizes the primary color variables for light and dark themes.
- Sets different hero background images for light and dark modes.

### 4. `src/components/HomepageFeatures/ContactForm.module.css`

This CSS module is used for styling the contact form component.

**Code:**

```css
/* Default light theme styles */
.contactForm {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: var(--ifm-color-primary);
}

.formLabel {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.formInput, .formTextarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.formTextarea {
    height: 150px;
    resize: vertical;
}

.submitButton {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: #fff;
    background-color: var(--ifm-color-primary);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submitButton:hover {
    background-color: var(--ifm-color-primary-dark);
}

.successMessage {
    color: #4caf50;
    text-align: center;
    margin-bottom: 1rem;
}

.errorMessage {
    color: #f44336;
    text-align: center;
    margin-bottom: 1rem;
}

/* Dark theme styles */
[data-theme='dark'] .contactForm {
    background: #333;
    border: 1px solid #555;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

[data-theme='dark'] h2 {
    color: var(--ifm-color-primary-light);
}

[data-theme='dark'] .formLabel {
    color: #fff;
}

[data-theme='dark'] .formInput, 
[data-theme='dark'] .formTextarea {
    background-color: #444;
    border: 1px solid #666;
    color: #fff;
}

[data-theme='dark'] .submitButton {
    background-color: var(--ifm-color-primary-lighter);
}

[data-theme='dark'] .submitButton:hover {
    background-color: var(--ifm-color-primary-light);
}

[data-theme='dark'] .successMessage {
    color: #4caf50;
}

[data-theme='dark'] .errorMessage {
    color: #f44336;
}
```

**Description:**

- Styles for the contact form in both light and dark themes.
- Includes styles for form elements, buttons, and messages.

### 5. `src/components/HomepageFeatures/ContactForm.tsx`

This file contains the React component for the contact form.

**Code:**

```tsx
import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './ContactForm.module.css'; // Create a new CSS module for the contact form

import siteConfig from '@generated/docusaurus.config';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    const scriptURL = siteConfig.customFields.REACT_APP_GOOGLE_SCRIPT_URL;
  
    if (typeof scriptURL !== 'string') {
      setError('Script URL is not defined');
      setLoading(false);
      return;
    }
  
    const postData = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      message: formData.message
    }).toString();
  
    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: postData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
  
      const result = await response.json();
  
      if (result.result === 'success') {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Unknown error occurred');
      }
    } catch (error) {
      setError('Failed to submit the form. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.contactForm}>
      <h2>Contact Me</h2>
      {submitted && <p className={styles.successMessage}>Your message has been received on contact.hackathonmj@gmail.com email. I will follow you back on email Thank you!!! 😊</p>}
      {error && <p className={styles.errorMessage}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          Name:
          <input
            className={styles.formInput}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label className={styles.formLabel}>
          Email:
          <input
            className={styles.formInput}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label className={styles.formLabel}>
          Message:
          <textarea
            className={styles.formTextarea}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button className={styles.submitButton} type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
```

**Description:**

- `ContactForm`: This component renders the contact form and handles form submission.
- Handles form state, submission, and error/success messaging.
- Submits form data to a Google Script URL configured in `docusaurus.config.js`.

## Additional Notes

- Ensure that the `REACT_APP_GOOGLE_SCRIPT_URL` in the Docusaurus configuration is correctly set to the URL of your Google Script.
- The project uses a combination of CSS modules and global CSS for styling.
- The contact form includes validation and displays appropriate messages based on submission status.

