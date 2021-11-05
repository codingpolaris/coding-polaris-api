import { Module } from '@nestjs/common';
import { ChallengesService } from './challenges.service';
import { ChallengesController } from './challenges.controller';
import { Challenge } from './entities/challenge.entity';
import { ContentsModule } from 'src/contents/contents.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ChallengesController],
  providers: [ChallengesService],
  imports: [TypeOrmModule.forFeature([Challenge]), ContentsModule],
  exports: [TypeOrmModule, ChallengesService],
})
export class ChallengesModule {}
