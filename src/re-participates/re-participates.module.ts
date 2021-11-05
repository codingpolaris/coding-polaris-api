import { Module } from '@nestjs/common';
import { ReParticipatesService } from './re-participates.service';
import { ReParticipatesController } from './re-participates.controller';

@Module({
  controllers: [ReParticipatesController],
  providers: [ReParticipatesService]
})
export class ReParticipatesModule {}
