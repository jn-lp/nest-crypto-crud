import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { ContractsModule } from './contracts/contracts.module';
import { BlocksModule } from './blocks/blocks.module';
import { Web3Module } from './web3/web3.module';
import { GroupsModule } from './groups/groups.module';
import { IndexesModule } from './indexes/indexes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ContractsModule,
    BlocksModule,
    Web3Module,
    GroupsModule,
    IndexesModule,
  ],
})
export class AppModule {}
