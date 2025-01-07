// app/how-it-works/page.js
export const metadata = {
    title: 'How it works: B2B Sales Pages, Lead Generation & Performance Tracking',
    description: 'Create B2B Sales Pages, Outbound Message Generation, Lead Generation with Seefunnel',
    metadataBase: new URL('https://seefunnel.com'),
    alternates: {
      canonical: '/how-it-works'
    },
    openGraph: {
      title: 'How Seefunnel works: Optimize B2B Sales Pages & Lead Generation | Performance Tracking',
      description: 'Optimize B2B Sales Pages & Lead Generation with Seefunnel | Performance Tracking Solutions',
      url: 'https://seefunnel.com/how-it-works',
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
      description: 'Create B2B Sales Pages, Outbound Message Generation, Lead Generation with Seefunnel',
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
  
  const HowItWorksPage = () => {
    return (
      <main>
        <section className="bg-secondary bg-opacity-50 position-relative pt-xl-8 overflow-hidden">
            <span>
                <svg className="position-absolute bottom-0 start-0 mb-n3 z-index-2" viewBox="0 0 1950 178" style={{ enableBackground: 'new 0 0 1950 178' }}>
                    <path className="fill-body" d="M1480.3,21.8c238.7-17.4,359.6,39,469.7,74.4V178H0v-54.2V4.4c57.3,38.5,287.7,14.6,446.4,0 c170.6-15.7,342.3,14.5,440.8,33C1104,78,1274.8,36.9,1480.3,21.8z"></path>
                </svg>
            </span>
            
            <div className="container position-relative pt-4 pt-sm-5 pb-4 pb-lg-8">
                <div className="row">
                    <div className="col-lg-5 mb-6 mb-lg-0">
                        <h1 className="h2 mb-lg-4">Powerful tool to drive your business</h1>
                        <p className="mb-lg-4">Gain insights, download leads, and draft outbound messages.</p>
                        <a href="https://app.seefunnel.com/auth/firebase/register" target="_blank" className="btn btn-primary-grad mb-0">Create a free account</a>
                    </div>

                    <div className="col-lg-6 position-relative ms-auto">
                        <div className="position-absolute top-0 start-50 translate-middle ms-6">
                            <img src="assets/images/elements/saas-decoration/03.png" className="shadow-primary-lg rounded-4" alt="feature image" />
                        </div>

                        <div className="position-absolute bottom-0 start-0 mb-n4">
                            <img src="assets/images/elements/saas-decoration/06.png" className="h-100px h-sm-200px shadow-primary-lg rounded-4" alt="feature image" />
                        </div>

                        <div className="ps-md-7">
                            <img src="assets/images/landing/4.jpg" className="rounded-4" alt="feature image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="pt-md-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="row g-4 align-items-center mb-6">
                            <div className="col-md-6 pe-md-4">
                                <div className="bg-secondary p-4 rounded-4">
                                    <img src="assets/images/landing/19.jpg" alt="tab image" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <h4 className="mb-md-4">Create Engaging B2B Sales Pages</h4>
                                <p className="mb-0">You can create a professional Sales Page, with already build in templates. You can choose from - AI Reps, Slide Show, Video, Testimonial, and Custom Messages</p>
                            </div>
                        </div>

                        <div className="row g-4 align-items-center mb-6">
                            <div className="col-md-6 order-2">
                                <h4 className="mb-md-4">Real-time data access</h4>
                                <p className="mb-0">Analyze how your marketing campagin is performing. Use AI Summary to summarize the analytics and provide you the feedback on your performance.</p>
                            </div>

                            <div className="col-md-6 ps-md-5 order-md-2">
                                <div className="bg-secondary p-4 rounded-4">
                                    <img src="assets/images/elements/saas-decoration/tab-2.png" alt="tab image" />
                                </div>
                            </div>
                        </div>

                        <div className="row g-4 align-items-center mb-6">
                            <div className="col-md-6 pe-md-5">
                                <div className="bg-secondary-grad p-4 rounded-4">
                                    <img src="assets/images/elements/saas-decoration/05.png" className="rounded-4" alt="tab image" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <h4 className="mb-md-4">Scrape Leads over the internet in realtime</h4>
                                <p className="mb-0">You can scrape leads as per your niche and location. You will be getting email address and phone numbers if they are found, later on you can also export them and use for your own work.</p>
                            </div>
                        </div>

                        

                        <div className="row g-4 align-items-center mb-6">
                            <div className="col-md-6 order-2">
                                <h4 className="mb-md-4">Generate content effortlessly in minutes</h4>
                                <p className="mb-0">Just bring your prospect LinkedIn URL and our AI will draft a personalize outbound message for you.</p>
                            </div>

                            <div className="col-md-6 ps-md-5 order-md-2">
                                <div className="bg-secondary p-4 rounded-4">
                                    <img src="assets/images/elements/saas-decoration/chatbot-02.png" alt="tab image" />
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
      </main>
    )
  }
  
  export default HowItWorksPage