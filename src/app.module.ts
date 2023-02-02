import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PostsController } from './posts/posts.controller';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, PostsController],
  providers: [AppService],
})
export class AppModule {}
