

import { Post } from "src/post/post.entity"
import { PostsModule } from "src/post/posts.module"
import { Profile } from "src/profile/profile.entity"
import { Receta } from "src/receta/entities/receta.entity"
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name:'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({unique:true})
    username:string

    @Column()
    password:string

    @Column({type:'datetime', default:()=>'CURRENT_TIMESTAMP'})
    createdAt:Date

    @Column({nullable:true})
    authStrategy:string
    affected: number

    @OneToOne(()=>Profile)
    @JoinColumn()    
    profile:Profile

    @OneToMany(()=> Receta, receta => receta.author)
    recetas: Receta[]

    @OneToMany(()=> Post, post => post.author )
    post:Post[]


}