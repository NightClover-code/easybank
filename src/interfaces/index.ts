export interface FeatureInterface {
  title: string;
  description: string;
  createdAt: string;
  image: ImageInterface;
}

export interface AdvantageInterface {
  title: string;
  description: string;
  topic: string;
  createdAt: string;
  image: ImageInterface;
}

export interface ImageInterface {
  alt: string;
  url: string;
}
