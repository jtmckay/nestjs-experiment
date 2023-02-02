import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  addPost(@Request() req, @Body() body: { title: string; content: string }) {
    const userId = req.user.user_id;
    return this.postsService.createPost(userId, body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':postId')
  async deletePost(@Request() req, @Param('id') postId: string) {
    const userId = req.user.user_id;
    return this.postsService.deletePost(userId, postId);
  }
}
