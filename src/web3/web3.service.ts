import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import Web3 from 'web3';
import { AbiItem } from 'web3-utils';

import { ContractsService } from '../contracts/contracts.service';

@Injectable()
export class Web3Service {
  public readonly web3: Web3;

  constructor(
    private configService: ConfigService,
    private contractsService: ContractsService,
  ) {
    const infura_id = this.configService.get<string>('INFURA_PROJECT_ID');
    this.web3 = new Web3(`https://ropsten.infura.io/v3/${infura_id}`);
  }

  private async newEthContract(
    jsonInterface: AbiItem[] | AbiItem,
    address?: string,
  ) {
    return new this.web3.eth.Contract(jsonInterface, address);
  }

  async contractFor(address: string) {
    return await this.contractsService
      .getAbiJSON(address)
      .then((abi) => this.newEthContract(abi, address));
  }
}
