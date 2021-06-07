import { WebcamImage } from "ngx-webcam";

export interface internModel {
    Name: string;
    Id: string;
    Phonenumber: number;
    CitizenshipId: number;  
    image?: WebcamImage; 
    Firstname?: string;
    token?: String;
   
    age?: number,
    Country?: string,
    City?: string,
    GraduationYear?: number,
    AcademicInstitution?: string
  
    professionalInfo? : {
        medicalInstitution : String,
        Residency : String,
        Department : String,
        yearsOfResidency : Number
    };
}