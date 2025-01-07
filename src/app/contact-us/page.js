// app/contact-us/page.js
export const metadata = {
    title: 'Contact Us: B2B Sales Pages, Lead Generation & Performance Tracking',
    description: 'We are here to help you with your B2B sales pages, lead generation and performance tracking needs.',
    metadataBase: new URL('https://seefunnel.com'),
    alternates: {
      canonical: '/contact-us'
    },
    openGraph: {
      title: 'Seefunnel: Optimize B2B Sales Pages & Lead Generation | Performance Tracking',
      description: 'Optimize B2B Sales Pages & Lead Generation with Seefunnel | Performance Tracking Solutions',
      url: 'https://seefunnel.com/contact-us',
      siteName: '@seefunnel.com',
      images: [
        {
          url: 'https://res.cloudinary.com/daboha8rt/image/upload/v1730294422/cta/gi8pt9x9q6ciwqy8azyl.jpg',
          width: 500,
          height: 500,
          alt: 'Stats for B2B Sales Pages & Lead Generation',
          type: 'image/jpeg',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@seefunnel.com',
      creator: '@seefunnel.com',
      description: 'Optimize B2B Sales Pages & Lead Generation with Seefunnel | Performance Tracking Solutions',
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
    '@type': 'ContactPage',
    'url': 'https://seefunnel.com/contact-us',
    'contactOption': 'http://schema.org/ContactOption',
    'contactType': 'Customer Support',
    'email': 'mailto:support@seefunnel.com',
    'areaServed': 'Global'
  }
  
  const ContactUs = () => {
    return (
      <>
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <main>
            <section className="bg-light position-relative overflow-hidden pt-xl-8" data-bs-theme="dark">
                <div className="position-absolute bottom-0 end-0 mb-n9">
                    <img src="assets/images/elements/grad-shape/blur-decoration-2.svg" className="opacity-2 blur-9" alt="Grad shape" />
                </div>
                
                <div className="container position-relative pt-4 pt-sm-5">
                    <span className="h2">👋</span>
                    <h1 className="display-5 mt-3 text-dark">Let's Connect</h1>
                </div>

                
            </section>

            <section className="pt-0 mt-n6 mt-lg-n7 mt-xl-n8">
                <div className="container">
                    <div className="row g-4 g-lg-5">
                        <div className="col-md-4">
                            <div className="card bg-secondary rounded-4 p-4 h-100">
                                <div className="card-body p-0">
                                    <div className="icon-lg bg-primary text-white rounded-circle mb-3"><i className="bi bi-envelope"></i></div>
                                    <h6>Mail us</h6>
                                    <p className="mb-0">We’re prompt and aim to respond to all inquiries within 24 hours.</p>
                                </div>
                                <div className="card-footer bg-transparent p-0 pt-3">
                                    <a href="#" className="text-primary-grad">support@seefunnel.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card bg-secondary rounded-4 p-4 h-100">
                                <div className="card-body p-0">
                                    <div className="icon-lg bg-warning text-white rounded-circle mb-3"><i className="bi bi-headset"></i></div>
                                    <h6>Support</h6>
                                    <p className="mb-0">Check out helpful resources, FAQs and developer tools. </p>
                                </div>
                                <div className="card-footer bg-transparent p-0 pt-3">
                                    <a className="btn btn-sm btn-white-shadow icon-link icon-link-hover" href="#">Chat now<i className="bi bi-arrow-right"></i> </a>
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
  
  export default ContactUs