import { Body, Controller, Get, Logger, UseGuards } from '@nestjs/common';
import { AuthenticationGuard } from '../authentication/authentication.guard';
import { UserService } from './user.service';
import { User } from 'src/models';
import { GetUserDto } from './dto/get-user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly logger: Logger,
  ) {}

  @UseGuards(AuthenticationGuard)
  @Get()
  getUser(@Body() user: GetUserDto): Promise<User> {
    this.logger.log('GET user');
    return this.userService.getUser(user);
  }
}
