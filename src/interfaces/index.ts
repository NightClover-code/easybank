import { SetStateAction, Dispatch } from 'react';

export interface BooleanState {
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}

export interface FeatureInterface {
  title: string;
  description: string;
  createdAt: string;
  image: ImageInterface;
  aosDelay?: number;
}

export interface AdvantageInterface {
  title: string;
  description: string;
  topic: string;
  createdAt: string;
  image: ImageInterface;
}

export interface TestimonialInterface {
  name: string;
  content: string;
  createdAt: string;
  image: ImageInterface;
}

export interface HeroInterface {
  description: string;
  image: ImageInterface;
}

export interface ImageInterface {
  alt: string;
  url: string;
}
