const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Marco Milani",
  "url": "https://yourdomain.com/",
  "sameAs": [
    "https://www.linkedin.com/in/marco-m-4b6149154/",
    "https://codeberg.org/mamila"
  ],
  "jobTitle": "Android & IoT Developer",
  "image": "https://yourdomain.com/assets/images/preview.png",
  "email": "mailto:mamila.inbox@outlook.com",
  "description": "I build secure Android apps and IoT prototypes, delivering resilient systems with a focus on security and UX."
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(structuredData);
document.head.appendChild(script);
