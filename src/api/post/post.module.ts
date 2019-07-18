import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { ApiService } from '../api.service';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [ApiService],
})
export class PostModule {}
