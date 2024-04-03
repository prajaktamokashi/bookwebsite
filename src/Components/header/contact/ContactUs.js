import React from 'react';
import styles from './my-style.module.css'; 

function ContactUs() {
  return (
    <main className={styles.contact}>
      <h1>Contact Us</h1>
      <div className={styles.info}>
        <p><strong>Address:</strong>At post Babhaleshwar,vasudevnagar,zipcode:413737</p>
        <p><strong>Phone:</strong> 9623147542</p>
        <p><strong>Email:</strong> prajaktamokashi1409@gmail.com</p>
        <p><strong>Fax:</strong> +1 (123) 456-7891</p>
        <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
      </div>
    </main>
  );
}

export default ContactUs;