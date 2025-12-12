import { environment } from "../../../environments/environment.prod"

export const BASE_URL = environment.production ? '' : 'http://localhost:8000';
