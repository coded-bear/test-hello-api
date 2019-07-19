import { Module } from '@nestjs/common';
import { GetController } from './get.controller';
import { HelloService } from '../hello.service';

@Module({
  imports: [],
  controllers: [GetController],
  providers: [HelloService],
})
export class GetModule {}
