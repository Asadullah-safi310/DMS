

export interface Address {
    line1: string;
    line2: string;
}
export interface IDoctor {
    _id: string;
    name: string;
    image: string; // Assuming this is an imported image path
    speciality: string;
    degree: string;
    experience: string;
    about: string;
    fees: number;
    address: Address;
}
export type DoctorsList = IDoctor[];
  


export interface Speciality {
    speciality: string;
    image: string;
}
 
export type SpecialitiesList = Speciality[];