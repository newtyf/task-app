import {
  Controller,
  Logger,
  Get,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { User } from 'src/models';

@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly logger: Logger,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() user: LoginUserDto): Promise<{ access_token: string }> {
    this.logger.log('LOGIN user');

    return this.authenticationService.loginUser(user);
  }

  @Post('register')
  register(@Body() user: CreateUserDto): Promise<User> {
    this.logger.log('REGISTER user');
    return this.authenticationService.createUser(user);
  }
}
