import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  constructor(private readonly logger: Logger) {}

  getUser(): string {
    this.logger.log('GET user');
    return 'found user';
  }
}
