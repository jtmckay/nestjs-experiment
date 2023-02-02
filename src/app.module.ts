import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PostsController } from './posts/posts.controller';
import { UsersModule } from './users/users.module';
import { PostsService } from './posts/posts.service';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [AuthModule, UsersModule, PostsModule],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService],
})
export class AppModule {}
