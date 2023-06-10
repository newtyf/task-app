import { Controller, Get } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Get('/sigin')
  sigIn(): string {
    return this.authenticationService.getUser();
  }
}
