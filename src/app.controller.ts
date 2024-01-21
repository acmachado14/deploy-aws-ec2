import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  async getUsers() {
    return await this.appService.getUsers();
  }

  @Post('user/create')
  @HttpCode(201)
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.appService.createUser(createUserDto);
  }
}
