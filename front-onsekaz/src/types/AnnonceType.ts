export interface AnnonceT {
    id: number;
    title: String,
    location: Number,
    latitude: Number,
    price: Number,
    rooms_nb: Number,
    beds_nb: Number,
    br_number: Number,
    property: property,
    type: type,
    max_customer: Number,
    description: string,
    photos: [string],
}