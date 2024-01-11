import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/models/users/user.entity';
import { CreateUserDto, LoginUserDto } from './dto';
import { compare, hash } from 'bcrypt';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

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

  async loginUser({ email, password }: LoginUserDto): Promise<User> {
    const logedUser = await this.usersRepository.findOne({ where: { email } });

    if (!logedUser) {
      throw new UnauthorizedException('Usuario o contraseña no validos');
    }

    if (!(await compare(password, logedUser.password))) {
      throw new UnauthorizedException('Usuario o contraseña no validos');
    }

    delete logedUser.password;
    return logedUser;
  }
}
