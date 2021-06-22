import { Injectable } from '@nestjs/common';

import { Web3Service } from '../web3/web3.service';

@Injectable()
export class GroupsService {
  private readonly defaultAddress: string =
    '0x4f7f1380239450AAD5af611DB3c3c1bb51049c29';

  constructor(private web3Service: Web3Service) {}

  async findAll() {
    return await this.web3Service
      .contractFor(this.defaultAddress)
      .then((contract) => contract.methods.getGroupIds().call());
  }

  async findOne(id: number) {
    return await this.web3Service
      .contractFor(this.defaultAddress)
      .then((contract) => contract.methods.getGroup(id).call());
  }
}
