import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  addPost(@Body() body: { email: string; username: string; password: string }) {
    return this.usersService.register(body);
  }

  // @Delete(':id')
  // async deletePost(@Param('id') id: string) {
  //   const user = await this.usersService.findByEmail(body.email);
  //   return this.usersService.validatePassword(user, body.password);
  // }
}
