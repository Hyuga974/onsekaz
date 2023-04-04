import { MongooseModuleOptions } from "@nestjs/mongoose";

export const databaseConfig: MongooseModuleOptions = {
    uri: "mongodb://api:docker1234@localhost:27017/nest",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
};