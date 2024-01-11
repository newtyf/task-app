import { Controller, Logger, Get, Post, Body } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { User } from 'src/models/users/user.entity';
import { CreateUserDto, LoginUserDto } from './dto';
import { error } from 'console';

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
  async login(@Body() user: LoginUserDto): Promise<User> {
    this.logger.log('LOGIN user');
    return await this.authenticationService.loginUser(user);
  }

  @Post('/register')
  async register(@Body() user: CreateUserDto): Promise<User> {
    this.logger.log('REGISTER user');
    return await this.authenticationService.createUser(user);
  }
}
