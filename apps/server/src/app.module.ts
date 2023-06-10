import { Module } from '@nestjs/common';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthenticationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
