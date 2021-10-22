interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  return (
    <head>
      <title>{title}</title>
      <link rel="shortcut icon" type="images/svg" href="./images/favicon.svg" />

      <meta name="description" content={description} />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      {keywords && <meta name="keywords" content={keywords} />}

      <meta name="author" content="Achraf Dev" />
    </head>
  );
};

export default SEO;
