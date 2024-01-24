import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models';
import { Repository } from 'typeorm';
import { GetUserDto } from './dto/get-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  // async getUsers(): Promise<User[]> {
  //   return await this.usersRepository.find();
  // }

  async getUser({ payload }: GetUserDto): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: {
        email: payload.email,
      },
    });

    delete user.password;

    return user;
  }
}
