import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/module/users.module';
import { configService} from './config/config.service';
import { PostsModule } from './post/posts.module';
import { RecetasModule } from './receta/module/receta.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UsersModule,
    PostsModule,
    RecetasModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}