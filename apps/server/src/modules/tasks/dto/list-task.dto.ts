import { ApiProperty } from '@nestjs/swagger';
import { IsObject } from 'class-validator';

export class ListTaskDto {
  @IsObject()
  @ApiProperty({ default: 'token' })
  readonly payload: {id: number, email: string};
}
