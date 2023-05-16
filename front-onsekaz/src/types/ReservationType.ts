import { AnnonceT } from "./AnnonceType";
import { UserT } from "./UserType";

export interface ReservationT {
    _id: string;
    user: UserT,
    annonce: AnnonceT,
    start_date: Date,
    end_date: Date,
    customer_nb: number,
}