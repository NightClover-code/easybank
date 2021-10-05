import { FeatureInterface } from "../src/interfaces";

export const dataToFeatures = (data: any): FeatureInterface[] => {
  return data.allContentfulFeature.edges.map(
    ({ node: { title, description, icon } }: any) => ({
      title,
      iconURL: icon.file.url,
      description: description.description,
    })
  );
};
