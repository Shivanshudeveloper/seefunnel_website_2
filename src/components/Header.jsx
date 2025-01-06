// components/Header.jsx
import Link from 'next/link';
import Image from 'next/image';

import MobileMenuToggle from './MobileMenuToggle';
import ProductDropdown from './ProductDropdown';

const productMenuItems = [
  {
    icon: "bi-file-earmark-text",
    bgColor: "bg-primary",
    title: "Sales Pages",
    description: "Create engaging B2B sales pages and track your leads",
  },
  {
    icon: "bi-envelope",
    bgColor: "bg-pink",
    title: "Emails Scraping",
    description: "Scrape emails from internet for your targeted niche",
  },
  {
    icon: "bi-phone",
    bgColor: "bg-success",
    title: "Phone Numbers Scraping",
    description: "Scrape phone numbers from internet for your targeted niche",
  },
  {
    icon: "bi-chat-dots",
    bgColor: "bg-warning",
    title: "AI Reps",
    description: "AI Reps are your sales reps in the digital world",
  },
  {
    icon: "bi-grid-fill",
    bgColor: "bg-info",
    title: "Deep AI Analysis",
    description: "Understand your marketing performance with AI",
  },
  {
    icon: "bi-fire",
    bgColor: "bg-purple",
    title: "A/B Testing",
    description: "Compare multiple versions of your sales pages",
  },
  {
    icon: "bi-pen",
    bgColor: "bg-pink",
    title: "Engagements",
    description: "Draft professional Emails & Cold DMs for your outreach",
  },
  {
    icon: "bi-browser-chrome",
    bgColor: "bg-success",
    title: "Chrome Extension",
    description: "Get Email Addresses from LinkedIn and Websites",
    link: "/chrome"
  }
];

export default function Header() {
  return (
    <header className="header-sticky header-absolute">
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand me-0" href="/">
            <Image
              className="light-mode-item navbar-brand-item"
              src="/assets/images/seefunnel-logo.png"
              alt="logo"
              width={150}
              height={40}
              priority
            />
          </Link>

          {/* Main navbar */}
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav navbar-nav-scroll dropdown-hover mx-auto">
              {/* Main Navigation Links */}
              <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/howitworks">How it works</Link>
              </li>

              {/* Products Dropdown */}
              <ProductDropdown />

              <li className="nav-item">
                <Link className="nav-link" href="/about">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact-us">Contact us</Link>
              </li>
            </ul>
          </div>

          {/* Right-side buttons */}
          <ul className="nav align-items-center dropdown-hover ms-sm-2">
            <li className="nav-item ms-2 d-none d-sm-block">
              <a 
                href="https://app.seefunnel.com/auth/firebase/login" 
                target="_blank"
                rel="noopener noreferrer" 
                className="btn btn-sm btn-primary-grad mb-0"
              >
                Sign Up/Login
              </a>
            </li>

            {/* Mobile menu toggle button - will need client component wrapper */}
            <MobileMenuToggle />
          </ul>
        </div>
      </nav>
    </header>
  );
}