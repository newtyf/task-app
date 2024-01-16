import { Logger, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, Logger],
  controllers: [UserController],
})
export class UserModule {}
