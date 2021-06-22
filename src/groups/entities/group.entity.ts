import { ApiProperty } from '@nestjs/swagger';

export class Group {
  @ApiProperty({ default: 'awesome group name' })
  name: string;

  @ApiProperty({ default: [0, 1, 2] })
  indexes: number[];
}
