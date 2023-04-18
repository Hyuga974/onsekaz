export interface AnnonceT {
    id: number;
    title: String,
    location: Number,
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