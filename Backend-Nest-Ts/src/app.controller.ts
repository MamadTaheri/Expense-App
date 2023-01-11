import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("report/income")
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  getAllIncomeReports(): any {
    return { name: 'mamad', code: 12431 };
  }
}
