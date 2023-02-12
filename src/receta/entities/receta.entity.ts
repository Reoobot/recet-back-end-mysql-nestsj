import { User } from "src/users/entities/user.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'receta'})
export class Receta {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;

    @Column()
    tipo_receta:string;

    @Column()
    tiempo_cocina:string;

    @Column()
    pais:string;

    @Column()
    instrucciones:string;

    @Column()
    numero_visitas:string;

    @Column()
    authorId:number;

    @ManyToOne(()=>User, user => user.recetas)
    author:User



}