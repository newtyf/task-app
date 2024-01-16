import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

import { Repository } from 'typeorm';
import { User } from 'src/models';
import { CreateUserDto, LoginUserDto } from './dto';
import { compare, hash } from 'bcrypt';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async createUser({
    username,
    email,
    password,
  }: CreateUserDto): Promise<User> {
    const hashedPassword = await hash(password, 10);

    const user = this.usersRepository.create({
      username,
      email,
      password: hashedPassword,
    });

    if (await this.usersRepository.exist({ where: { email } })) {
      throw new ConflictException('Este usuario ya existe');
    }

    const savedUser = await this.usersRepository.save(user);
    delete savedUser.password;
    return savedUser;
  }

  async loginUser({
    email,
    password,
  }: LoginUserDto): Promise<{ access_token: string }> {
    const logedUser = await this.usersRepository.findOne({ where: { email } });

    if (!logedUser) {
      throw new UnauthorizedException('Usuario o contraseña no validos');
    }

    if (!(await compare(password, logedUser.password))) {
      throw new UnauthorizedException('Usuario o contraseña no validos');
    }

    const payload = { id: logedUser.id, email: logedUser.email };
    delete logedUser.password;

    // return logedUser;

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
