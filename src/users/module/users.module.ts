import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/profile/profile.entity';
import { UsersController } from '../controller/users.controller';
import { User } from '../entities/user.entity';
import { UsersService } from '../services/users.service';

@Module({
  imports:[TypeOrmModule.forFeature([User, Profile])],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService],
})
export class UsersModule {}
