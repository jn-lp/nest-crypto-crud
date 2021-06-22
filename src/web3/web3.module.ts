import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { Web3Service } from './web3.service';
import { ContractsModule } from '../contracts/contracts.module';

@Module({
  imports: [ConfigModule, ContractsModule],
  providers: [Web3Service],
  exports: [Web3Service],
})
export class Web3Module {}
