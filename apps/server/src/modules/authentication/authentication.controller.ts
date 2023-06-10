import { Controller, Logger, Get } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly logger: Logger,
  ) {}

  @Get('/sigin')
  sigIn(): string {
    this.logger.log('GET user');
    return this.authenticationService.getUser();
  }
}
