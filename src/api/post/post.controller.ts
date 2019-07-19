import { Controller, Post, Body } from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { HelloService } from '../hello.service';

@Controller('api/post/hello')
export class PostController {
  constructor(private readonly helloService: HelloService) {}

  @Post() getHello(@Body() postDto: PostDto): object {
    if (!postDto.name) return { error: true, data: null };

    return { error: false, data: this.helloService.getHello(postDto.name) };
  }
}
