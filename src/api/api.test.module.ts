import { Module } from '@nestjs/common';
import { ApiTestController } from './api.test.controller';

@Module({
  imports: [],
  controllers: [ApiTestController],
  providers: [],
})
export class ApiTestModule {}
