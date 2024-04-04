import React from 'react';
import './About.css'

function AboutUs() {
  return (
    <main className="about-us">
      <h1>About Us</h1>
      <div className="about-paragraphs">
        <p>
          Our website specializes in providing a wide variety of books across numerous genres.
          We strive to offer the latest, bestsellers, and classics in both fiction and non-fiction categories.
        </p>
        <p>
          Our goal is to deliver an enjoyable and informative book buying experience,
          so you can find the perfect book for yourself or as a gift for someone else.
        </p>
        <p>
          Our catalog includes books from popular authors, award-winning writers, and up-and-coming new talent.
          We aim to inspire readers and foster a love for literature in every genre, from mystery and suspense to romance and children's books.
        </p>
        <p>
          We proudly support authors and the literary community by offering competitive prices and a user-friendly platform to showcase their work.
          Explore our catalog and discover your next favorite book today!
        </p>
      </div>
    </main>
  );
}

export default AboutUs;