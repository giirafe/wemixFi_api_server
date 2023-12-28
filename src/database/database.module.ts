import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Account, TransferTx } from './database.model';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';

import { HttpModule } from '@nestjs/axios'; // for internal Http Calls

@Module({
  imports: [SequelizeModule.forFeature([ Account, TransferTx]), HttpModule],
  providers: [DatabaseService],
  controllers: [DatabaseController],
  exports: [DatabaseService], // Export DatabaseService
})
export class DatabaseModule {}