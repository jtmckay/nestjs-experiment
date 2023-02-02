import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from '../users/users.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  addPost(@Body() body: { text: string; title: string }) {
    return 'this.usersService.register(body)';
  }

  // @Delete(':id')
  // async deletePost(@Param('id') id: string) {
  //   const user = await this.usersService.findByEmail(body.email);
  //   return this.usersService.validatePassword(user, body.password);
  // }
}
