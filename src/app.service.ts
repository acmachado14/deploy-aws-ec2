import { Injectable } from '@nestjs/common';
import { db } from './db';
import { users } from './db/schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getUsers() {
    return await db.select().from(users);
  }

  async createUser(data: CreateUserDto) {
    return await db.insert(users).values({ name: data.name }).returning();
  }
}
