import { Module } from '@nestjs/common';

import { LoggerModule } from './infrastructure/logger/logger.module';
import { ExceptionsModule } from './infrastructure/exception/exceptions.module';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { TypeormModule } from './infrastructure/config/typeorm/typeorm.module';

@Module({
  imports: [
    EnvironmentConfigModule,
    TypeormModule,
    LoggerModule,
    ExceptionsModule,
  ],
})
export class AppModule { }
