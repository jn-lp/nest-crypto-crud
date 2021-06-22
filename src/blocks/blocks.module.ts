import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { BlocksService } from './blocks.service';
import { BlocksController } from './blocks.controller';

import { ContractsService } from '../contracts/contracts.service';
import { Web3Service } from '../web3/web3.service';

@Module({
  imports: [ConfigModule],
  controllers: [BlocksController],
  providers: [BlocksService, Web3Service, ContractsService],
})
export class BlocksModule {}
