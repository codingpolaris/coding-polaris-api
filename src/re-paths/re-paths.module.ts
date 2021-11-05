import { Module } from '@nestjs/common';
import { RePathsService } from './re-paths.service';
import { RePathsController } from './re-paths.controller';

@Module({
  controllers: [RePathsController],
  providers: [RePathsService]
})
export class RePathsModule {}
