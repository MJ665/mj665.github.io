
import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './ContactForm.module.css'; // Create a new CSS module for the contact form

// import {envVariable} from "docusaurus.config"

// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// const {siteConfig} = useDocusaurusContext();

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
    <>
    <br />
    <div className={styles.contactForm}>
      <h2>Contact Me</h2>
      {submitted && <p className={styles.successMessage}>Your message has been received on contact.hackathonmj@gmail.com email. I will follow you back on email Thank you!!! 😊</p>}
      {error && <p className={styles.errorMessage}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          Name*:
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
          Email*:
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
          Message*:
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
    <br /></>
  );
};

export default ContactForm;
