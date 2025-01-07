// app/about/page.js
import { Metadata } from 'next'

export const metadata = {
  title: 'About Seefunnel: Elevating B2B Sales Pages & Lead Generation',
  description: 'Optimize B2B Sales Pages & Lead Generation with Seefunnel | Performance Tracking Solutions',
  metadataBase: new URL('https://seefunnel.com'),
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    title: 'Seefunnel: Optimize B2B Sales Pages & Lead Generation | Performance Tracking',
    description: 'Optimize B2B Sales Pages & Lead Generation with Seefunnel | Performance Tracking Solutions',
    url: 'https://seefunnel.com',
    siteName: '@seefunnel.com',
    images: [
      {
        url: 'https://res.cloudinary.com/daboha8rt/image/upload/v1730294422/cta/gi8pt9x9q6ciwqy8azyl.jpg',
        width: 500,
        height: 500,
        alt: 'Stats for B2B Sales Pages & Lead Generation',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@seefunnel.com',
    creator: '@seefunnel.com',
    images: ['https://res.cloudinary.com/daboha8rt/image/upload/v1730294422/cta/gi8pt9x9q6ciwqy8azyl.jpg'],
    description: 'Optimize B2B Sales Pages & Lead Generation with Seefunnel | Performance Tracking Solutions',
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

const AboutPage = () => {
  return (
    <>
        <main>
            <section className="bg-secondary position-relative pt-xl-8">
                <div className="position-absolute top-0 start-0 mt-n9 ms-n5">
                    <img src="assets/images/elements/grad-shape/blur-decoration.svg" className="blur-7 opacity-2" alt="Grad shape" />
                </div>

                <div className="position-absolute top-0 start-50 mt-n9 ms-n9">
                    <img src="assets/images/elements/grad-shape/blur-decoration.svg" className="blur-8 opacity-1" alt="Grad shape" />
                </div>
                
                <div className="container position-relative pt-4 pt-sm-5">

                    <div className="position-absolute top-50 start-0 translate-middle mt-5">
                        <img src="assets/images/elements/clay-decoration.png" alt="Clay-decoration" />
                    </div>

                    <div className="inner-container text-center align-items-center mb-5 mb-md-7">

                        <h1 className="display-5 mb-4">About <span className="text-primary-grad">Seefunnel</span></h1>

                        <div className="md-5">
                            <p>Seefunnel allows you to create stunning B2B sales pages that you can use in your marketing campaigns.</p>
                            <p>If you are just sending messages to your leads no one will engage to your content<b> Draft B2B Sales Pages</b> that make a lasting impact. From concept to execution, we ensure your brand stands out in a crowded marketplace.</p>
                            <p>We focus on creating high-impact visuals that leave a lasting impression.</p>

                            <p>If you don't have leads don't worry we can help you with that too,<b>Scrape Emails, Phone Numbers, and more. </b>These leads later can be used for your marketing campaigns.</p>
                            
                            <p>
                                Seefunnel also helps you to draft professional Cold Emails & Cold DMs for your campagins. You just need to bring the LinkedIn URL from which our system scrape the prospect data and use it to make messages personalized.
                            </p>

                            <p>
                                <b>
                                    What are you waiting for? 🚀
                                </b>
                            </p>

                            <a className="btn btn-primary icon-link icon-link-hover mt-3" href="https://app.seefunnel.com/auth/firebase/register" target="_blank">Create free account<i className="bi bi-arrow-right"></i> </a>
                        </div>	

                    </div>

                    <div className="row position-relative g-4 g-lg-5">
                        
                    </div>
                </div>
            </section>

            <section style={{ marginTop: '-80px' }} className="bg-secondary position-relative overflow-hidden">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-5">
                            <h2 className="mb-3">Stay updated with our newsletter</h2>
                            <p className="mb-0">Our newsletter provides valuable content to help you stay ahead in your marketing.</p>
                        </div>

                        <div className="col-md-6 col-xl-5 ms-auto">
                            <div className="bg-body rounded-2 position-relative z-index-2 p-2 mb-2">
                                <form className="input-group">
                                    <input className="form-control bg-transparent border-0 me-1" type="email" placeholder="Enter your email address" />
                                    <button type="button" className="btn btn-primary rounded-2 mb-0">Subscribe!</button>
                                </form>
                            </div>
                            <div className="form-text">✌️ No Spam — We Promise!</div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default AboutPage