import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [AuthModule, UsersModule, CacheModule.register({ ttl: 5000 })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
