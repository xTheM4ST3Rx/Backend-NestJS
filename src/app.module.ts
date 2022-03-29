import {MongooseModule} from "@nestjs/mongoose";
import { Module } from '@nestjs/common'; 
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admDB:cSLhv6j2i5tTJdMD@diamoviedb.t04ue.mongodb.net/M4st3rDB?retryWrites=true&w=majority'),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
