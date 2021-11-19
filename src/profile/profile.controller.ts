import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from './services/profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':id')
  find(@Param('id') id: string) {
    return this.profileService.findProfile(id);
  }
}
