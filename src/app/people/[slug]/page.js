import React from 'react';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  Briefcase, 
  Globe, 
  LinkedinIcon,
  Laptop,
  Lock
} from 'lucide-react';

export const metadata = {
    title: 'Kelli Taylor Email Address - Find Business Contact Information | SeeFunnel',
    description: "Access comprehensive professional profiles from SeeFunnel's verified B2B database. Find contact details, company insights, and technology stacks to power your sales and marketing efforts.",
    metadataBase: new URL('https://seefunnel.com'),
    alternates: {
      canonical: '/people'
    },
    authors: [{ name: 'seefunnel.com' }],
    openGraph: {
      title: 'Professional Profile Database - Verified B2B Contact Information | SeeFunnel',
      description: "Access comprehensive professional profiles from SeeFunnel's verified B2B database. Find contact details, company insights, and technology stacks to power your sales and marketing efforts.",
      url: 'https://seefunnel.com/people',
      siteName: '@seefunnel.com',
      images: [
        {
          url: 'https://res.cloudinary.com/daboha8rt/image/upload/v1730294422/cta/gi8pt9x9q6ciwqy8azyl.jpg',
          width: 500,
          height: 500,
          alt: 'SeeFunnel Professional Profile Database',
          type: 'image/jpeg',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@seefunnel.com',
      creator: '@seefunnel.com',
      description: "Access comprehensive professional profiles from SeeFunnel's verified B2B database. Find contact details, company insights, and technology stacks to power your sales and marketing efforts.",
      images: ['https://res.cloudinary.com/daboha8rt/image/upload/v1730294422/cta/gi8pt9x9q6ciwqy8azyl.jpg'],
    },
    icons: {
      icon: '/favicon.ico',
      apple: [
        { url: 'https://res.cloudinary.com/daboha8rt/image/upload/v1730296194/cta/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        { url: 'https://res.cloudinary.com/daboha8rt/image/upload/v1730296255/cta/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        { url: 'https://res.cloudinary.com/daboha8rt/image/upload/v1730296311/cta/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
}

const PeoplePage = () => {
  // Previous profile data remains the same
  const profile = {
    First_Name: "Kelli",
    Last_Name: "Taylor",
    Title: "General Manager & Real Estate Sales",
    Company_Name: "Carolina Retreats",
    Company_Description: "Discover the best vacation rentals on Topsail Island and Pleasure Island, North Carolina with Carolina Retreats! Book your vacation today!",
    Email: "kelli@carolinaretreats.com",
    Primary_Phone: "+1 800-526-6432",
    City: "Carolina Beach",
    State: "North Carolina",
    Country: "United States",
    Industry: "hospitality",
    Website: "http://www.carolinaretreats.com",
    Company_Linkedin_Url: "http://www.linkedin.com/company/carolinaretreats",
    Person_Linkedin_Url: "http://www.linkedin.com/in/kelli-a-taylor-244388a4",
    Technologies: [
      "Route 53",
      "SendInBlue",
      "Outlook",
      "MailChimp SPF",
      "Microsoft Office 365",
      "Amazon AWS",
      "Typeform",
      "Sophos",
      "Trustpilot",
      "Bing Ads",
      "Bootstrap Framework",
      "reCAPTCHA",
      "FullStory",
      "Google Dynamic Remarketing",
      "DoubleClick Conversion",
      "Google Maps"
    ]
  };

  

  return (
    <>
    <br />
    <br />
    <br />
    <br />

    <div className="bg-light py-5">
      <div className="container">
        {/* Header Section */}
        <div className="card mb-4 shadow-sm">
          {/* Previous header content remains the same */}
          <div className="card-body p-4">
            <div className="row">
              <div className="col-12">
                <h1 className="display-5 fw-bold mb-2">
                  {profile.First_Name} {profile.Last_Name}
                </h1>
                <h2 className="h4 text-muted mb-4">{profile.Title}</h2>
                
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <Building2 className="me-2 text-primary" size={20} />
                      <span>{profile.Company_Name}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <MapPin className="me-2 text-primary" size={20} />
                      <span>{`${profile.City}, ${profile.State}, ${profile.Country}`}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <Mail className="me-2 text-primary" size={20} />
                      <a href={`mailto:${profile.Email}`} className="text-decoration-none">
                        {profile.Email}
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center">
                      <Phone className="me-2 text-primary" size={20} />
                      <a href={`tel:${profile.Primary_Phone}`} className="text-decoration-none">
                        {profile.Primary_Phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-4">
          {/* Company Info and Technology Stack sections remain the same */}
          <div className="col-lg-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title d-flex align-items-center mb-4">
                  <Briefcase className="me-2 text-primary" size={24} />
                  Company Overview
                </h3>
                <p className="card-text mb-4">{profile.Company_Description}</p>
                <div className="d-flex gap-3">
                  <a 
                    href={profile.Website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary d-flex align-items-center"
                  >
                    <Globe className="me-2" size={16} />
                    Website
                  </a>
                  <a 
                    href={profile.Company_Linkedin_Url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary d-flex align-items-center"
                  >
                    <LinkedinIcon className="me-2" size={16} />
                    Company LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title d-flex align-items-center mb-4">
                  <Laptop className="me-2 text-primary" size={24} />
                  Technology Stack
                </h3>
                <div className="d-flex flex-wrap gap-2">
                  {profile.Technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New CTA Section */}
        <div className="card mb-4 shadow-sm bg-primary text-white">
          <div className="card-body p-4 text-center">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <Lock size={28} className="me-2" />
                  <h3 className="card-title text-white mb-0">Unlock Full Access</h3>
                </div>
                <p className="lead text-white mb-4">Get complete insights, contact information, and technology stack details for millions of companies.</p>
                <a 
                  href="https://app.seefunnel.com/auth/firebase/register"
                  className="btn btn-lg btn-light d-inline-flex align-items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Full Access Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Details Section remains the same */}
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="card-title mb-0">Professional Details</h3>
              <a 
                href={profile.Person_Linkedin_Url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary d-flex align-items-center"
              >
                <LinkedinIcon className="me-2" size={16} />
                View LinkedIn Profile
              </a>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="border-start border-4 border-primary ps-3">
                  <small className="text-muted d-block">Industry</small>
                  <span className="fs-5 text-capitalize">{profile.Industry}</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="border-start border-4 border-primary ps-3">
                  <small className="text-muted d-block">Location</small>
                  <span className="fs-5">{`${profile.City}, ${profile.State}`}</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="border-start border-4 border-primary ps-3">
                  <small className="text-muted d-block">Company</small>
                  <span className="fs-5">{profile.Company_Name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PeoplePage;