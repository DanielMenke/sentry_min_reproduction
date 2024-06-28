import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {Update} from "./update.decorator";
import {TestInput} from "./update.input";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  test(@Update(TestInput) input: any) {
    return this.appService.getHello();
  }
}
