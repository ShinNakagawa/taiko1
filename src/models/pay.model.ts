import { Monthly } from '../models/monthly.model';
export class Pay {
  id?: string;
  userid?: string;
  month?: number;
  date?: string; 
  monthly?: Array<Monthly>; 
}
