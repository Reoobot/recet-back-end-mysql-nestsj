import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersService } from "src/users/services/users.service";
import { Repository } from "typeorm";

import {CreatePostDto} from "./dto/create-post.dto"
import { Post } from "./post.entity";


@Injectable()
export class PostsService{
    constructor(
        @InjectRepository(Post) private postsRepository:Repository<Post>,
        private usersService:UsersService){}

    async createPost(post:CreatePostDto){
        const userFoud = await this.usersService.getUser(post.authorId)

        if(!userFoud) 
        return new HttpException('User not found', HttpStatus.NOT_FOUND)
        const newPost = this.postsRepository.create(post)
        return this.postsRepository.save(newPost)



    }
    getPosts(){
        return this.postsRepository.find()
    }
}



// @Injectable()
// export class PostsService {
//     constructor(@InjectRepository(Post) private postsRepository:Repository<Post>,){}

//     createPost(post: CreatePostDto){
//         const newPost = this.postsRepository.create(post);
//         return this.postsRepository.save(newPost)
//     }

//     getPosts(){
//         return this.postsRepository.find()
//     }

// }