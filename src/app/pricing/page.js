// app/pricing/page.js
export const metadata = {
    title: 'Seefunnel Pricing: Optimize B2B Sales Pages & Lead Generation | Performance Tracking',
    description: "Explore Seefunnel's competitive pricing plans designed to optimize your B2B sales pages and lead generation. Choose a plan that fits your business needs and accelerate your growth today.",
    metadataBase: new URL('https://seefunnel.com'),
    alternates: {
      canonical: '/pricing'
    },
    authors: [{ name: 'seefunnel.com' }],
    openGraph: {
      title: 'Seefunnel: Optimize B2B Sales Pages & Lead Generation | Performance Tracking',
      description: "Explore Seefunnel's competitive pricing plans designed to optimize your B2B sales pages and lead generation. Choose a plan that fits your business needs and accelerate your growth today.",
      url: 'https://seefunnel.com/pricing',
      siteName: '@seefunnel.com',
      images: [
        {
          url: 'https://res.cloudinary.com/daboha8rt/image/upload/v1730294422/cta/gi8pt9x9q6ciwqy8azyl.jpg',
          width: 500,
          height: 500,
          alt: 'Seefunnel Pricing Plans',
          type: 'image/jpeg',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@seefunnel.com',
      creator: '@seefunnel.com',
      description: "Explore Seefunnel's competitive pricing plans designed to optimize your B2B sales pages and lead generation. Choose a plan that fits your business needs and accelerate your growth today.",
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
  
  // Schema.org structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Seefunnel Pricing Plans',
    'description': 'Competitive pricing plans designed to optimize your B2B sales pages and lead generation.',
    'offers': {
      '@type': 'Offer',
      'url': 'https://seefunnel.com/pricing',
      'priceCurrency': 'USD',
      'price': '9.99',
    }
  }
  
  const PricingPage = () => {
    return (
      <>
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <main>
        <section className="price-wrap position-relative overflow-hidden pt-xl-8">
            <div className="bg-primary-grad blur-9 h-300px w-100 opacity-2 position-absolute top-0 start-50 translate-middle-x mt-n7"></div>
            <div className="container position-relative z-index-2 pt-4 pb-6 pb-xl-8">
                <h3>Pricing Plan For</h3>
                <h1 className="fw-bold mb-4">Every <span className="text-primary-grad">Business</span> Needs</h1>

                    <form 
                        className="bg-body shadow-primary border border-primary d-inline-flex align-items-center rounded-3 p-3 px-sm-4 py-sm-3" 
                        style={{ '--bs-border-opacity': '0.20' }}
                    >                    
                    <span className="fw-semibold heading-color">Monthly</span>
                    <div className="form-check form-switch form-check-lg mx-2 mb-0">
                        <input className="form-check-input mt-0 price-toggle" type="checkbox" id="flexSwitchCheckDefault" />
                    </div>
                    <span className="fw-semibold heading-color">Lifetime</span>
                </form>
            </div>

            <div className="container-fluid">
                <div className="max-width-1550">
                    <div className="row">
                        <div className="col-md-6 col-xl-3 mb-5 mb-xl-0">
                            <div className="card shadow overflow-hidden p-1">
                                <div className="card-header bg-secondary bg-opacity-50 p-4 pb-0">
                                    <div className="icon-lg bg-body shadow-primary rounded-circle mb-3">
                                        <i className="bi bi-lightning-charge-fill fa-lg lh-1 heading-color"></i>
                                    </div>
                                    <h6 className="mb-3">Basic</h6>
                                    <p className="mb-0"> 
                                        <span className="h2 mb-0 plan-price" data-monthly-price="$9.99" data-annual-price="$99.99">$9.99</span>    
                                        <span className="billing-cycle">/month</span>
                                    </p> 
                                    <a href="https://app.ctagenerator.com/auth/firebase/register" target="_blank" className="btn btn-dark btn-transition w-100 mt-4">Get started</a>
                                </div>

                                <div className="card-footer bg-secondary bg-opacity-50 p-4">
                                    <ul className="list-group list-group-borderless mb-0">
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>2 Sales Pages</li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>200 Valid Leads
                                        </li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>800 Engagements</li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>A/B Testing
                                        </li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>Unlimited Contacts
                                        </li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>9 AM - 5 PM PST Support
                                        </li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>Reports
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3 mb-5 mb-xl-0">
                            <div className="card shadow overflow-hidden p-1">
                                <div className="card-header bg-secondary bg-opacity-50 p-4 pb-0">
                                    <div className="icon-lg bg-body shadow-primary rounded-circle mb-3">
                                        <i className="bi bi-send-fill fa-lg lh-1 heading-color"></i>
                                    </div>
                                    <h6 className="mb-3">Starter</h6>
                                    <p className="mb-0"> <span className="h2 mb-0 plan-price" data-monthly-price="$29.99" data-annual-price="$249.99">$29.99</span>    <span className="billing-cycle">/month</span> </p>
                                    <a href="https://app.ctagenerator.com/auth/firebase/register" target="_blank" className="btn btn-dark btn-transition w-100 mt-4">Get started</a>
                                </div>

                                <div className="card-footer bg-secondary bg-opacity-50 p-4">
                                    <ul className="list-group list-group-borderless mb-0">
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>5 Sales Pages</li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>800 Valid Leads
                                        </li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>1,200 Engagements</li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>A/B Testing
                                        </li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>Unlimited Contacts
                                        </li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>24/7 Support
                                        </li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>Reports
                                        </li>
                                    </ul>
                                
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3 mb-5 mb-xl-0">
                            <div className="card shadow p-1">
                                <div className="bg-primary-grad small text-white rounded position-absolute top-0 start-50 translate-middle px-3 py-1">Recommended</div>

                                <div className="card-header bg-secondary-grad rounded-top p-4 pb-0">
                                    <div className="icon-lg bg-pink rounded-circle mb-3">
                                        <i className="bi bi-rocket-takeoff-fill fa-lg lh-1 text-white"></i>
                                    </div>
                                    <h6 className="mb-3">Premium</h6>
                                    <p className="mb-0"> <span className="h2 mb-0 plan-price" data-monthly-price="$49.99" data-annual-price="$499.99">$49.99</span>    <span className="billing-cycle">/month</span> </p>
                                    <a href="https://app.ctagenerator.com/auth/firebase/register" target="_blank" className="btn btn-white-shadow w-100 mt-4">Get started</a>
                                </div>

                                <div className="card-footer bg-secondary-grad p-4">
                                    <ul className="list-group list-group-borderless mb-0">
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>12 Sales Pages</li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>2,000 Valid Leads
                                        </li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>2,500 Engagements</li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>A/B Testing
                                        </li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>Unlimited Contacts
                                        </li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>Dedicated Support Person
                                        </li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>Reports
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-xl-3 mb-5 mb-xl-0">
                            <div className="card shadow overflow-hidden p-1">
                                <div className="card-header bg-secondary bg-opacity-50 position-relative overflow-hidden p-4 pb-0">
                                    <div className="position-absolute top-0 end-0 mt-n8 me-n5">
                                        <img src="assets/images/elements/grad-shape/blur-decoration.svg" className="blur-7 opacity-2 h-300px" alt="Grad shape" />
                                    </div>
                                    <div className="icon-lg bg-body shadow-primary rounded-circle mb-3">
                                        <i className="bi bi-headset fa-lg lh-1 heading-color"></i>
                                    </div>
                                    <h6 className="mb-3">Business plan</h6>
                                    <h2><b>Enterprise</b></h2>
                                    <a href="contact-us.html" target="_blank" className="btn btn-dark btn-transition w-100 mt-4">Price on request</a>
                                </div>

                                <div className="card-footer bg-secondary bg-opacity-50 p-4">
                                    <ul className="list-group list-group-borderless mb-0">
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>Custom Sales Pages</li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>Custom Valid Leads</li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>Custom Engagements</li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>A/B Testing</li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>Unlimited Contacts</li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>Dedicated Support Person</li>
                                        <li className="list-group-item d-flex heading-color mb-0"><i className="bi bi-check-lg text-primary me-1"></i>Reports</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </main>
      </>
    )
  }
  
  export default PricingPage