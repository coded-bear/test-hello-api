import { Controller, Post, Body } from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { ApiService } from '../api.service';

@Controller('api/post/hello')
export class PostController {
  constructor(private readonly apiService: ApiService) {}

  @Post() getHello(@Body() postDto: PostDto): object {
    if (!postDto.name) return { error: true, data: null };

    return { error: false, data: this.apiService.getHello(postDto.name) };
  }
}
