import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './config/app.config';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseConfig } from './config/database.config';

@Module({
  imports: [ConfigModule.forRoot(appConfig),
  MongooseModule.forRoot(databaseConfig.uri, {
    useNewUrlParser: databaseConfig.useNewUrlParser,
    useUnifiedTopology: databaseConfig.useUnifiedTopology,
    useFindAndModify: databaseConfig.useFindAndModify,
    useCreateIndex: databaseConfig.useCreateIndex
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
