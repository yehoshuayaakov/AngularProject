import { WebcamImage } from "ngx-webcam";

export interface internModel {
    Name: string;
    Id: number;
    Phonenumber: number;
    CitizenshipId: number;  
    image?: WebcamImage; 
}