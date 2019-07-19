import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { HelloService } from '../hello.service';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [HelloService],
})
export class PostModule {}
