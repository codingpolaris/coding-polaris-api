import { Module } from '@nestjs/common';
import { RePerformsService } from './re-performs.service';
import { RePerformsController } from './re-performs.controller';

@Module({
  controllers: [RePerformsController],
  providers: [RePerformsService]
})
export class RePerformsModule {}
