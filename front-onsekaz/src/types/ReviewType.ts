import { AnnonceT } from "./AnnonceType";
import { UserT } from "./UserType";

export interface ReviewT {
    _id: string;
    user: UserT,
    annonce: AnnonceT,
    score: number,
    content: string,
}