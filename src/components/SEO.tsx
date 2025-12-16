import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Deon Orina - AI Engineer (ML & Deep Learning)',
  description = 'Deon Orina is an AI Engineer specializing in machine learning, deep learning, and data science. He builds production AI systems, scalable backends in Python and Rust, React Native mobile apps, and smart contracts.',
  keywords = 'Deon Orina, AI Engineer, Machine Learning, Deep Learning, Data Science, MLOps, Python, Rust, React Native, Backend Development, Smart Contracts, Blockchain, Technical Writer, Medium',
  image = 'https://deonhq.xyz/deon.jpg',
  url = 'https://deonhq.xyz',
  type = 'website',
  structuredData
}) => {
  const fullTitle = title.includes('Deon Orina') ? title : `${title} | Deon Orina`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Deon Orina" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Deon Orina" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@deonchinese" />
      <meta property="twitter:site" content="@deonchinese" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
