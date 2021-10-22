import {
  AdvantageInterface,
  FeatureInterface,
  HeroInterface,
  TestimonialInterface,
} from '../interfaces';

export const dataToFeatures = (data: any): FeatureInterface[] => {
  return sortByDate(
    data.allContentfulFeature.edges.map(
      ({ node: { title, description, image, createdAt, aosDelay } }: any) => ({
        title,
        aosDelay,
        iconURL: image.icon.file.url,
        description: description.description,
        image: {
          alt: image.alt,
          url: image.icon.file.url,
        },
        createdAt,
      })
    )
  );
};

export const dataToAdvantages = (data: any): AdvantageInterface[] => {
  return sortByDate(
    data.allContentfulAdvantage.edges.map(
      ({ node: { title, description, image, createdAt, topic } }: any) => ({
        title,
        description: description.description,
        image: {
          alt: image.alt,
          url: image.icon.file.url,
        },
        createdAt,
        topic,
      })
    )
  );
};

export const dataToTestimonials = (data: any): TestimonialInterface[] => {
  return sortByDate(
    data.allContentfulTestimonial.edges.map(
      ({ node: { name, content, image, createdAt } }: any) => ({
        name,
        content: content.content,
        image: {
          alt: image.alt,
          url: image.icon.file.url,
        },
        createdAt,
      })
    )
  );
};

export const dataToHero = (data: any): HeroInterface => {
  return data.allContentfulHero.edges.map(
    ({ node: { description, image } }: any) => ({
      description: description.description,
      image: {
        alt: image.alt,
        url: image.icon.file.url,
      },
    })
  )[0];
};

export const sortByDate = (arr: any[]) => {
  return arr
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .reverse();
};

export const isEven = (n: number) => n % 2 === 0;

export * from './styles';
