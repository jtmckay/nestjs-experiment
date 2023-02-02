import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UsersModule, PassportModule.register({ defaultStrategy: 'local' })],
  providers: [AuthService, LocalStrategy],
  controllers: [],
})
export class AuthModule {}
