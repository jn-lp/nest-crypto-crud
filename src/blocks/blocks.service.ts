import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Web3Service } from '../web3/web3.service';

import { BlockNumber } from 'web3-core';

@Injectable()
export class BlocksService {
  constructor(
    private configService: ConfigService,
    private web3Service: Web3Service,
  ) {}

  async findOne(id: BlockNumber) {
    return await this.web3Service.web3.eth.getBlock(id);
  }
}
