import { CacheModule, Module } from '@nestjs/common';

import redisStore from 'cache-manager-redis-store';

import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { Web3Module } from '../web3/web3.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    Web3Module,
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        store: redisStore,
        host: configService.get('REDIS_HOST'),
        port: configService.get('REDIS_PORT'),
        ttl: 60 * 60,
      }),
    }),
  ],
  controllers: [GroupsController],
  providers: [GroupsService],
  exports: [GroupsService],
})
export class GroupsModule {}
