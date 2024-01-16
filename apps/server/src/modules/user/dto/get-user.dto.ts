import { ApiProperty } from '@nestjs/swagger';
import { IsObject } from 'class-validator';

export class GetUserDto {
  @IsObject()
  @ApiProperty({ default: 'token' })
  readonly payload: {id: number, email: string};
}
