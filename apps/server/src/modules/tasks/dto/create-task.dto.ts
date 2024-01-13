import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsObject } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @ApiProperty({ default: 'test task' })
  readonly title: string;

  @IsObject()
  @ApiProperty({ default: {} })
  readonly payload: {id: number, email: string};

  @IsString()
  @ApiProperty({ default: "DO MY HOMEWORK AT SEVEN O'CLOCK" })
  readonly description: string;

  @IsBoolean()
  @ApiProperty({ default: false })
  readonly done: boolean;
}
