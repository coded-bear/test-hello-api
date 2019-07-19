import { Controller, Get, Param } from '@nestjs/common';
import { HelloService } from '../hello.service';

@Controller('api/get/hello')
export class GetController {
  constructor(private readonly helloService: HelloService) {}

  @Get(':name') getHello(@Param('name') name: string): object {
    return { error: false, data: this.helloService.getHello(name) };
  }
}
