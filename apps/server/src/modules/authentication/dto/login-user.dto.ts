import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  @ApiProperty({ default: 'test2@gmail.com' })
  readonly email: string;

  @IsString()
  @ApiProperty({ default: 'testpassword' })
  readonly password: string;
}
