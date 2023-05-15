import { propertyHouse, typeHouse } from "./AnnonceEnum";
import { UserT } from "./UserType";

export interface AnnonceT {
    _id: string;
    user: UserT,
    title: String,
    location: String,
    longitude: Number,
    latitude: Number,
    price: Number,
    rooms_nb: Number,
    beds_nb: Number,
    br_number: Number,
    property: propertyHouse,
    type: typeHouse,
    max_customer: Number,
    description: string,
    photos: string[],
}