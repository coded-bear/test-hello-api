import { Module } from '@nestjs/common';
import { GetModule } from './api/get/get.module';
import { PostModule } from './api/post/post.module';

@Module({
  imports: [GetModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
