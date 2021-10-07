import { FeatureInterface } from "../src/interfaces";

export const dataToFeatures = (data: any): FeatureInterface[] => {
  return data.allContentfulFeature.edges.map(
    ({ node: { title, description, icon, createdAt } }: any) => ({
      title,
      iconURL: icon.file.url,
      description: description.description,
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
