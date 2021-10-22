import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      {keywords && <meta name="keywords" content={keywords} />}

      <meta name="author" content="Achraf Dev" />
    </Helmet>
  );
};

export default SEO;
