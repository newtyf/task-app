import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly logger: Logger) {}

  getApi(): string {
    this.logger.log('GET / api');
    return 'Welcompe shortly api';
  }
}
