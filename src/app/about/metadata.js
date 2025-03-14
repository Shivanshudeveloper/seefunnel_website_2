// app/about/metadata.js

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