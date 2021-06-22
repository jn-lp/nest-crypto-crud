import { Controller, Get, Param } from '@nestjs/common';

import { BlocksService } from './blocks.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('blocks')
@Controller('blocks')
export class BlocksController {
  constructor(private readonly blocksService: BlocksService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blocksService.findOne(id);
  }
}
