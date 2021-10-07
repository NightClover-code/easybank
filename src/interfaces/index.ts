export interface FeatureInterface {
  title: string;
  description: string;
  createdAt: string;
  image: ImageInterface;
}

export interface ImageInterface {
  alt: string;
  url: string;
}

export interface FeatureStylesInterface {
  color: string;
  backgroundColor: string;
}
