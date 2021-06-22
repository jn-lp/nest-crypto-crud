import { Module } from '@nestjs/common';
import { IndexesService } from './indexes.service';
import { IndexesController } from './indexes.controller';
import { Web3Module } from '../web3/web3.module';

@Module({
  imports: [Web3Module],
  controllers: [IndexesController],
  providers: [IndexesService],
  exports: [IndexesService],
})
export class IndexesModule {}
