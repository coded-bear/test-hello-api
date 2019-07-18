import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  getHello(name: string): string {
    return `Hello ${name}!`;
  }
}
