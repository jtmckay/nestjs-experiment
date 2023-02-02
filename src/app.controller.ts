import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Post, PostsService } from './posts/posts.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly postsService: PostsService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(JwtAuthGuard)
  @Get('feed')
  async getFeed(@Request() req): Promise<Post[]> {
    const userId = req.user.user_id;
    return this.postsService.getPostsByUser(userId);
  }
}
