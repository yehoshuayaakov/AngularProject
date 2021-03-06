import { WebcamImage } from "ngx-webcam";
import { test } from "../supervisors/upload-test/upload-test.component";

export interface internModel {
    name: string;
    id: number;
    phonenumber: number;
    citizenshipId: number; 
    email: string; 
    image?: WebcamImage; 
    Firstname?: string;
    token?: String;
    roleNumber?: number;
    password? : string;
   
    personalDetails? : {
        age?: number,
        country?: string,
        city?: string,
        graduationYear?: number,
        academicInstitution?: string
    }, 

    professionalDetails? : {
        medicalInstitution? : string,
        residency? : string,
        department? : string,
        yearsOfResidency? : number
    },
    tests?: test [],
}