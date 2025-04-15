"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CopyrightYear from './CopyrightYear';

export default function Footer() {
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);

  return (
    <footer 
      className="bg-dark position-relative pt-6 pt-lg-8 mt-auto" 
      data-bs-theme="dark"
      style={{ marginBottom: 0 }}
    >
      <div className="container position-relative">
        {/* Original Content Container */}
        <div className="row g-4">
          {/* Widget item */}
          <div className="col-md-6 col-xl-4">
            <Link href="/">
              <Image 
                className="h-60px" 
                src="/assets/images/seefunnel-footer-logo.png" 
                alt="logo"
                width={180}
                height={60}
                style={{ height: '60px', width: 'auto' }}
              />
            </Link>
            <p className="my-3 my-xl-4">
              Crafts compelling Sales Pages using Dynamic Videos, Sales AI Reps, and more.
              Also, find Emails & Phone Numbers for your targeted niche.
            </p>
          </div>

          <div className="col-xl-7 ms-auto">
            <div className="row g-4">
              {/* Company Links */}
              <div className="col-6 col-md-3">
                <h6 className="mb-3 mb-xl-4">Company</h6>
                <ul className="nav flex-column gap-1">
                  <li className="nav-item">
                    <Link className="nav-link pt-0" href="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link pt-0" href="/pricing">Pricing</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link pt-0" href="/about">About us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link pt-0" href="/contact-us">Contact us</Link>
                  </li>
                  <li className="nav-item">
                    <a 
                      className="nav-link pt-0" 
                      href="https://blog.seefunnel.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal Links */}
              <div className="col-6 col-md-3">
                <h6 className="mb-3 mb-xl-4">
                  <Link href="/term-condition">Terms&Condition</Link>
                </h6>
                <ul className="nav flex-column gap-1">
                  <li className="nav-item">
                    <Link className="nav-link pt-0" href="/privacy-policy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link pt-0" href="/cookie-policy">
                      Cookie Policy
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link pt-0" href="/refund-policy">
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* New Directory Container */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="border-top pt-4" style={{borderColor: 'rgba(255,255,255,0.1)'}}>
              <div 
                className="d-inline-block mb-2" 
                onClick={() => setIsDirectoryOpen(!isDirectoryOpen)}
                style={{ cursor: 'pointer' }}
              >
                <small className="text-muted">
                  <span 
                    className="d-inline-block rounded-circle me-2" 
                    style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: '#fff',
                      verticalAlign: 'middle'
                    }}
                  ></span>
                  DIRECTORY {isDirectoryOpen ? '▲' : '▼'}
                </small>
              </div>

              {isDirectoryOpen && (
                <div className="row g-2 small text-muted">
                  {[
                    'Top 200 Famous People Directory',
                    ...Array.from({length: 111}, (_, i) => `F${i+1}`),
                    'Top Companies in IT',
                    'Company Search by Industry',
                    'Free Tools',
                    'Celebrity Directory'
                  ].map((item, index) => (
                    <div key={index} className="col-6 col-md-3 col-lg-2">
                      <Link 
                        href={`/directory/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="text-muted text-decoration-none"
                      >
                        {item}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-4 mb-0 opacity-1" />

        {/* Bottom footer */}
        <div className="d-md-flex justify-content-between align-items-center text-center text-lg-start py-4">
          <div className="text-body small mb-3 mb-md-0">
            <CopyrightYear />
          </div>
          
          <ul className="nav d-flex justify-content-center gap-1 mb-0">
            <li className="nav-item">
              <Link className="nav-link small py-0" href="/privacy-policy">
                Privacy policy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link small py-0 pe-0" href="/term-condition">
                Terms & conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}