import { Controller, Logger, Get, Post, Body } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { User } from 'src/models/users/user.entity';
import { CreateUserDto } from './dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly logger: Logger,
  ) {}

  @Get('/users')
  get(): Promise<User[]> {
    this.logger.log('GET user');
    return this.authenticationService.getUsers();
  }

  @Post('/login')
  login(): string {
    this.logger.log('LOGIN user');
    return 'login';
  }

  @Post('/register')
  register(@Body() user: CreateUserDto): Promise<User> {
    this.logger.log('REGISTER user');
    return this.authenticationService.createUser(user);
  }
}
