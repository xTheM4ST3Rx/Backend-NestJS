import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User , UserSchema} from './entities/user.entity';
import { AuditMiddleWare } from 'src/middlewares/auth';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService]
})

export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    
    //Aplicado Middlewares em todas as rotas de Deletes
    consumer.apply(AuditMiddleWare).forRoutes({
      path:'users/*', 
      method: RequestMethod.DELETE
    })

  }
}
