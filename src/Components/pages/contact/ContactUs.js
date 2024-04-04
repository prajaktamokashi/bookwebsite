import React from 'react';
import styles from './my-style.module.css'; 

function ContactUs() {
  return (
    <main className={styles.contact}>
      <h1>Contact Us</h1>
      <div className={styles.info}>
      <p><strong>Name:</strong>Prajakta Satish Mokashi</p>
        <p><strong>Address:</strong>At post Babhaleshwar,vasudevnagar,zipcode:413737</p>
        <p><strong>Phone:</strong> 9623147542</p>
        <p><strong>Email:</strong> prajaktamokashi1409@gmail.com</p>
        <p><strong>Instagram::</strong>https://www.instagram.com/_prajakta_mokashi_?igsh=MXdvaWZndjViYnB5dg==</p>
        <p><strong>Linkedin:</strong>https://www.linkedin.com/in/prajakta-mokashi-024062253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app</p>
        <p><strong>Fax:</strong> +1 (123) 456-7891</p>
        <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
      </div>
    </main>
  );
}

export default ContactUs;