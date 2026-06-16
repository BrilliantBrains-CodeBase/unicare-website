// Shared NAP (Name, Address, Phone) facts + JSON-LD schema builders.
// Keep these in sync with AnnouncementBar / Header / Footer contact details.

export const ORG = {
  name: 'UniCare Hospitals',
  url: 'https://www.unicareglobalhospitals.com',
  logo: 'https://www.unicareglobalhospitals.com/favicon.png',
  telephone: ['+91 90905 46363', '+91 91218 56565'],
  email: 'info@unicareglobalhospitals.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A 201, 2nd Floor, Saanvi Antalya Homes, Kokapet',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
};

// Hospital + LocalBusiness schema — Home page only.
export function hospitalSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Hospital',
    name: ORG.name,
    url: ORG.url,
    logo: ORG.logo,
    image: ORG.logo,
    telephone: ORG.telephone,
    email: ORG.email,
    address: ORG.address,
  };
}

// Physician schema — one per doctor profile.
export function physicianSchema({ name, jobTitle, image, specialty, sameAs }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name,
    jobTitle,
    image,
    medicalSpecialty: specialty,
    worksFor: { '@type': 'Hospital', name: ORG.name, url: ORG.url },
    address: ORG.address,
    telephone: ORG.telephone[0],
    ...(sameAs ? { sameAs } : {}),
  };
}

// MedicalSpecialty schema — one per specialty page.
export function medicalSpecialtySchema({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalSpecialty',
    name,
    description,
    url,
  };
}

// Article / blog post schema — MedicalWebPage with Physician author.
export function articleSchema({ title, description, url, publishedDate, authorName, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: title,
    description,
    url: `${ORG.url}${url}`,
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: { '@type': 'Physician', name: authorName, worksFor: { '@type': 'Hospital', name: ORG.name, url: ORG.url } },
    publisher: { '@type': 'MedicalOrganization', name: ORG.name, url: ORG.url },
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    ...(image ? { image } : {}),
  };
}

// FAQPage schema — wherever an FAQ block appears. faqs: [{ question, answer }]
export function faqPageSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
}
