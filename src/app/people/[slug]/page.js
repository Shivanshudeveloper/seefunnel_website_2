// app/people/[slug]/page.js

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
import { notFound } from 'next/navigation';

// Function to blur email
const blurEmail = (email) => {
  const [username, domain] = email.split('@');
  return `${username.charAt(0)}${'•'.repeat(username.length - 1)}@${domain}`;
};

// Function to blur phone number
const blurPhone = (phone) => {
  // Remove all non-digit characters
  const digitsOnly = phone?.replace(/\D/g, '') || '';
  const firstThree = digitsOnly.slice(0, 3);
  const remainingLength = digitsOnly.length - 3;

  return `${firstThree}${'•'.repeat(remainingLength)}`;
};

// Fetch all profiles
async function getAllProfiles() {
  const res = await fetch(
    'https://gist.githubusercontent.com/Shivanshudeveloper/e158049f7583ecf19431f36e8db4535e/raw/aa7712397cd5aca88285c28b6032ac36e6745525/gistfile1.txt'
  );
  
  if (!res.ok) {
    throw new Error('Failed to fetch profiles');
  }

  return res.json();
}

// Get single profile
async function getProfileData(slug) {
  try {
    const profiles = await getAllProfiles();
    return profiles.find((profile) => profile.generalPublicId === slug);
  } catch (error) {
    console.error('Error in getProfileData:', error);
    return null;
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = params; // Destructure here, not in the function signature
  const profile = await getProfileData(slug);

  if (!profile) {
    return {
      title: 'Profile Not Found',
      description: 'The requested profile could not be found.',
    };
  }

  return {
    title: `${profile.First_Name} ${profile.Last_Name} - Professional Profile | SeeFunnel`,
    description: `View professional details and contact information for ${profile.First_Name} ${profile.Last_Name}, ${profile.Title} at ${profile.Company_Name}.`,
    openGraph: {
      title: `${profile.First_Name} ${profile.Last_Name} - Professional Profile`,
      description: `View professional details and contact information for ${profile.First_Name} ${profile.Last_Name}, ${profile.Title} at ${profile.Company_Name}.`,
    },
  };
}

// Generate static paths for all profiles
// export async function generateStaticParams() {
//   try {
//     const profiles = await getAllProfiles();
//     return profiles.map((profile) => ({
//       slug: profile.generalPublicId,
//     }));
//   } catch (error) {
//     console.error('Error generating static params:', error);
//     return [];
//   }
// }

// Page component
export default async function PeoplePage({ params }) {
  const { slug } = params; // Destructure here, not in the function signature
  const profile = await getProfileData(slug);

  if (!profile) {
    notFound();
  }

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="bg-light py-5">
        <div className="container">
          <div className="card mb-4 shadow-sm">
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
                        <div className="d-flex align-items-center">
                          <span className="text-muted">{blurEmail(profile.Email)}</span>
                          <Lock size={16} className="ms-2 text-primary" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="d-flex align-items-center">
                        <Phone className="me-2 text-primary" size={20} />
                        <div className="d-flex align-items-center">
                          <span className="text-muted">
                            {blurPhone(profile.Primary_Phone)}
                          </span>
                          <Lock size={16} className="ms-2 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mb-4">
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

          <div className="card mb-4 shadow-sm bg-primary text-white">
            <div className="card-body p-4 text-center">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <Lock size={28} className="me-2" />
                    <h3 className="card-title text-white mb-0">Unlock Full Access</h3>
                  </div>
                  <p className="lead text-white mb-4">
                    Get complete insights, contact information, and technology
                    stack details for millions of companies.
                  </p>
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
                    <span className="fs-5 text-capitalize">
                      {profile.Industry}
                    </span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="border-start border-4 border-primary ps-3">
                    <small className="text-muted d-block">Location</small>
                    <span className="fs-5">
                      {`${profile.City}, ${profile.State}`}
                    </span>
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
}
