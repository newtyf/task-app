import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/models/users/user.entity';
import { CreateUserDto } from './dto';
import { hash } from 'bcrypt';

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

    const savedUser = await this.usersRepository.save(user);
    delete savedUser.password;
    return savedUser;
  }
}
