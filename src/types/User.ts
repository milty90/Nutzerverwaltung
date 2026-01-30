import type { JSX } from "react";

export const Gender = {
  MALE: "Männlich",
  FEMALE: "Weiblich",
  OTHER: "Andere",
} as const;

export type Gender = (typeof Gender)[keyof typeof Gender];

export type User = {
  id: number;
  name: string;
  birthDate: string;
  address: string;
  gender: Gender;
  email: string;
  phone: string;
  website: string;
  img: string;
};
