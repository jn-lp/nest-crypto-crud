import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { IndexesService } from './indexes.service';
import { Index } from './entities/index.entity';

@ApiTags('indexes')
@Controller('indexes')
export class IndexesController {
  constructor(private readonly indexesService: IndexesService) {}

  @ApiOkResponse({ type: Index })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.indexesService.findOne(id);
  }
}
