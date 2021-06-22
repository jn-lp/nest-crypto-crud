import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class ContractsService {
  private readonly contracts = {
    '0x4f7f1380239450AAD5af611DB3c3c1bb51049c29':
      'https://raw.githubusercontent.com/HvrlK/abi-contract/master/Contract.abi',
  };

  async getAbiJSON(address: string) {
    return await fetch(this.contracts[address]).then((res) => res.json());
  }
}
