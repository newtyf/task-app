import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { AuthenticationService } from 'src/modules/authentication/authentication.service';

@Injectable()
export class LoginMiddleware implements NestMiddleware {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly logger: Logger,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    this.logger.log('LOG login middleware');

    // if (!(await this.authenticationService.existUser(req.body.email))) {
    //   res.statusCode = 403;
    //   return res.send({
    //     message: 'usuario no existente',
    //   });
    // }

    // if (
    //   !(await this.authenticationService.validatePassword({
    //     email: req.body.email,
    //     password: req.body.password,
    //   }))
    // ) {
    //   res.statusCode = 403;
    //   return res.send({
    //     message: 'usuario y/o contraseña no validos',
    //   });
    // }

    next();
  }
}
