import { Controller, Logger, Get } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { User } from 'src/models/users/user.entity';

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
}
