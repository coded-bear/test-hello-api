import { Controller, Get, Param } from '@nestjs/common';
import { ApiService } from '../api.service';

@Controller('api/get/hello')
export class GetController {
  constructor(private readonly apiService: ApiService) {}

  @Get(':name') getHello(@Param('name') name: string): object {
    return { error: false, data: this.apiService.getHello(name) };
  }
}
