export interface Annonce {
    _id: string;
    user: {
        _id: string;
        email: string;
        username: string;
        __v: number;
    };
    title: string;
    location: string;
    latitude: number;
    longitude: number;
    price: number;
    rooms_nb: number;
    beds_nb: number;
    br_number: number;
    property: string;
    type: string;
    max_customer: number;
    description: string;
    photos: string[];
    __v: number;
}