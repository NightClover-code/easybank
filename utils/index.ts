import { FeatureInterface } from "../src/interfaces";

export const dataToFeatures = (data: any): FeatureInterface[] => {
  return data.allContentfulFeature.edges.map(
    ({ node: { title, description, image, createdAt } }: any) => ({
      title,
      iconURL: image.icon.file.url,
      description: description.description,
      image: {
        alt: image.alt,
        url: image.icon.file.url,
      },
      createdAt,
    })
  );
};

export const sortByDate = (arr: FeatureInterface[]) => {
  return arr
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .reverse();
};
