import { Video } from '../models/video.model';
export class Renshu {
    id?: string;
    userid?: string;
    name?: string;
    description?: string;
    registerDate?: string;
    videoUrl?: string;
    videoAry?: Array<Video>;  
}
