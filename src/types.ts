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