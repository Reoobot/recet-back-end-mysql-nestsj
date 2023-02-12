import { Module } from "@nestjs/common";
import { PostsService } from "./post.service";
import { PostsController } from "./post.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "./post.entity";
import { UsersModule } from "src/users/module/users.module";

@Module({
    imports:[
        TypeOrmModule.forFeature([Post]), UsersModule],
        providers:[PostsService],
        controllers:[PostsController],
        exports:[PostsService]

})
export class PostsModule {}


