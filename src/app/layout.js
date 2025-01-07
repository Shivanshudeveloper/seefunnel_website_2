import Script from 'next/script';
import './globals.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export const metadata = {
  metadataBase: new URL('https://seefunnel.com'),
  title: {
    default: 'Seefunnel: B2B Sales Pages, Lead Generation & Performance Tracking',
    template: '%s | Seefunnel'
  },
  description: 'Optimize B2B Sales Pages, Cold Email Generation, Lead Generation with Seefunnel & Performance Tracking Solutions',
  icons: {
    icon: '/favicon.ico',
    apple: 'https://res.cloudinary.com/daboha8rt/image/upload/v1730296194/cta/apple-touch-icon.png',
    android: [
      { url: 'https://res.cloudinary.com/daboha8rt/image/upload/v1730296255/cta/android-chrome-512x512.png', sizes: '512x512' },
      { url: 'https://res.cloudinary.com/daboha8rt/image/upload/v1730296311/cta/android-chrome-192x192.png', sizes: '192x192' }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Use Next.js Script component for third-party scripts */}
        <Script
          id="crisp-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];window.CRISP_WEBSITE_ID="89a52db3-b646-40e9-adfd-0c2bf8823f5d";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
            `
          }}
        />
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-QBBKHLL3D9"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QBBKHLL3D9');
            `
          }}
        />

        {/* CSS links */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" />
        <link rel="stylesheet" href="/assets/vendor/swiper/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      
      <body className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">{children}</main>
        <Footer />
        
        {/* Scripts */}
        <script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" 
          crossOrigin="anonymous"
        ></script>
        <Script src="/assets/vendor/ityped/index.js" strategy="afterInteractive" />
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/functions.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}