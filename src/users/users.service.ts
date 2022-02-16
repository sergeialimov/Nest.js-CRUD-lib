// CRUD version
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { User } from './user.entity';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo);
  }
}

// Default version
// import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

// @Injectable()
// export class UsersService {
//   create(createUserDto: CreateUserDto) {
//     return 'This action adds a new user';
//   }

//   findAll() {
//     return `This action returns all users`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} user`;
//   }

//   update(id: number, updateUserDto: UpdateUserDto) {
//     return `This action updates a #${id} user`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} user`;
//   }
// }
