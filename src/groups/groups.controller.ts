import {
  CacheInterceptor,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { GroupsService } from './groups.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { Group } from './entities/group.entity';

@ApiTags('groups')
@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @UseInterceptors(CacheInterceptor)
  @ApiOkResponse({ type: [Number] })
  @Get()
  findAll() {
    return this.groupsService.findAll();
  }

  @UseInterceptors(CacheInterceptor)
  @ApiOkResponse({ type: Group })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupsService.findOne(+id);
  }
}
