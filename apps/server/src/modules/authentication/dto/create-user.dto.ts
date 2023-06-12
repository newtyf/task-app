import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ default: 'test' })
  readonly username: string;

  @IsEmail()
  @ApiProperty({ default: 'test@gmail.com' })
  readonly email: string;

  @IsString()
  @ApiProperty({ default: 'test' })
  readonly password: string;
}
