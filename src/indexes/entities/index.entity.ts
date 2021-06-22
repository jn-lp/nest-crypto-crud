import { ApiProperty } from '@nestjs/swagger';

export class Index {
  @ApiProperty()
  id: number;

  @ApiProperty({ default: 'awesome index name' })
  name: string;

  @ApiProperty({ default: 100000000000000000 })
  ethPriceInWei: number;

  @ApiProperty({ default: 10000 })
  usdPriceInCents: number;

  @ApiProperty({ default: 30436313 })
  usdCapitalization: number;

  @ApiProperty()
  percentageChange: number;
}
