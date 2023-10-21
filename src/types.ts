import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StringLiteral } from "typescript";

export interface AboutCardType {
  image: string;
  title: string;
  description: string;
}

export interface StaffInfoType {
  id: number;
  subject?: string | undefined;
  name: string;
  lastname: string;
  email: string;
}

export interface NastaniType {
  image?: string | undefined;
  title: string;
  time: string;
  date: string;
  location: string
}

export interface NastaniSoopshtenijaCardType {
  id: string;
  image: string | StaticImport;
  title: string;
  description: string;
  date: string;
}

export interface NagradeniUceniciCardType{
  id: string;
  img: string;
  name: string;
  place: string;
  category: string;
}

export interface KluboviDramskiSekciiType{
  id: number;
  image: string | StaticImport;
  title: string;
  description: string;
  date: string;
  section: string;
}

