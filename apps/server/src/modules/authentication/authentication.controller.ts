import {
  Controller,
  Logger,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { User } from 'src/models';
import { Response } from 'express';

@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly logger: Logger,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(
    @Body() user: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<string> {
    this.logger.log('LOGIN user');

    const { access_token } = await this.authenticationService.loginUser(user);

    res.cookie('access_token', access_token, {
      httpOnly: true,
      secure: true,
    });

    return 'Login Successful';
  }

  @Post('register')
  register(@Body() user: CreateUserDto): Promise<User> {
    this.logger.log('REGISTER user');
    return this.authenticationService.createUser(user);
  }
}
