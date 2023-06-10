import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  getUser(): string {
    return 'found user';
  }
}
