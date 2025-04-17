import React from 'react'
import { format, parseISO } from 'date-fns';

import { API_SERVICE_URL } from '@/config';
// import BlogRow from '@/components/BlogRow';


const DateFormatter = ({ dateString }) => {
    // Parse the ISO string to a Date object
    const date = parseISO(dateString);
    // Format the date as "25 Oct 2024" (set the date manually or dynamically as needed)
    const formattedDate = format(date, 'dd MMM yyyy');
  
    return <>{formattedDate}</>;
}

async function fetchProductData(slug) {
    const res = await fetch(`${API_SERVICE_URL}/api/v1/main/blogsmanage/getblog/${slug}`, {
      cache: 'no-store',
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
}

// app/[id]/page.js
export async function generateMetadata({ params }) {
    const { id } = await params
    const data = await fetchProductData(id);
  
    return {
        title: data?.data.title,
        description: (data?.data.plainContent).slice(0, 100),
        openGraph: {
            title: data?.data.title,
            description: (data?.data.plainContent).slice(0, 100),
        },
        twitter: {
            card: 'summary_large_image',
            title: data?.data.title,
            description: (data?.data.plainContent).slice(0, 100),
        },
        robots: {
            index: true,
            follow: true,
        },
        alternates: {
            canonical: `/view/${id}`
        },
        keywords: ['teads', 'dsadas']
    };
}

const Page = async ({ params }) => {
    const { id } = await params
    const data = await fetchProductData(id);
    return (
        <>
            <main>
                {/* Hero Section */}
                <section className="bg-gradient-to-b from-gray-50 to-white pt-20">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {data?.data.title}
                    </h1>
                    
                    <div className="flex items-center justify-center space-x-6 text-gray-600">
                        <div className="flex items-center">
                        <i className="bi bi-calendar me-2"></i>
                        <DateFormatter dateString={data?.data.createdAt} />
                        </div>
                        <div className="flex items-center">
                        <i className="bi bi-person me-2"></i>
                        {data?.data.author}
                        </div>
                    </div>
                    </div>
                </div>
                </section>

                {/* Content Section */}
                <section style={{ marginTop: '-420px' }} >
                <div className="container max-w-3xl mx-auto px-4">
                    <article className="prose lg:prose-lg mx-auto">
                    {/* Main Content */}
                    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                        <div 
                        className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: data?.data.content }}
                        />
                    </div>

                    </article>
                </div>
                </section>

                {/* Related Posts Section */}
                {/* <section className="bg-gray-50 py-12">
                <div className="container max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Related Posts</h2>
                    <BlogRow />
                </div>
                </section> */}
            </main>
        </>
    )
}

export default Page