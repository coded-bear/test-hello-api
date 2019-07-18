import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiTestDto } from './dto/api.test.dto';

@Controller('api/test')
export class ApiTestController {
  @Post() findAll(@Body() dto: ApiTestDto): object {
    return { error: false, data: dto.name };
  }

  @Get(':id') findOne(@Param('id') id: string): object {
    return { error: false, data: id };
  }

  @Put(':id') update(@Param('id') id: string, @Body() dto: ApiTestDto): object {
    return { error: false, data: { id: id, item: dto.name } };
  }

  @Delete(':id') remove(@Param('id') id: string): object {
    return { error: false, data: id };
  }
}
