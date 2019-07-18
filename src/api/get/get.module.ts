import { Module } from '@nestjs/common';
import { GetController } from './get.controller';
import { ApiService } from '../api.service';

@Module({
  imports: [],
  controllers: [GetController],
  providers: [ApiService],
})
export class GetModule {}
