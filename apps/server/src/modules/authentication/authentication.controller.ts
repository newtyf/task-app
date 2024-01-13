import { Controller, Logger, Get, Post, Body, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { User } from 'src/models';
import { AuthenticationGuard } from './authentication.guard';

@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly logger: Logger,
  ) {}

  @UseGuards(AuthenticationGuard)
  @Get('users')
  get(): Promise<User[]> {
    this.logger.log('GET user');
    return this.authenticationService.getUsers();
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() user: LoginUserDto): Promise<{ access_token: string; }> {
    this.logger.log('LOGIN user '+ process.env.JWT_SECRET);

    return this.authenticationService.loginUser(user);
  }

  @Post('register')
  register(@Body() user: CreateUserDto): Promise<User> {
    this.logger.log('REGISTER user');
    return this.authenticationService.createUser(user);
  }
}
