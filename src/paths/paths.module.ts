import { Module } from '@nestjs/common';
import { PathsService } from './paths.service';
import { PathsController } from './paths.controller';
import { Path } from './entities/path.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Path])],
  exports: [TypeOrmModule],
  controllers: [PathsController],
  providers: [PathsService],
})
export class PathsModule {}
