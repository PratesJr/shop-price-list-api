import { Module } from '@nestjs/common';
import { EnvironmentConfigService } from './environment-config.service';

@Module({
  providers: [EnvironmentConfigService],
})
// eslint-disable-next-line prettier/prettier
export class EnvironmentConfigModule { }
