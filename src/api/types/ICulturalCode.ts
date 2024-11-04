import { IFilesCulturalCode } from "./IFilesCulturalCode";

export interface ICultural {
    id: number;

    label: string;                    
    description: string; 
  
    files: IFilesCulturalCode[];
    userId: number;
  
    createdAt: Date;
    updatedAt: Date;
}