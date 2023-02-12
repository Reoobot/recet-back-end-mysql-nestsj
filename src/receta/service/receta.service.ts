import { HttpException, HttpStatus, Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersService } from "src/users/services/users.service";
import { Repository } from "typeorm";
import { CreateRecetaDto } from "../dto/create-receta.dto";
import { Receta } from "../entities/receta.entity";



@Injectable()
export class RecetasService{

    constructor(@InjectRepository (Receta) private recetasRepository:Repository<Receta>,
     private usersService: UsersService){}
    
    async createReceta(receta: CreateRecetaDto){
        const userFoud = await this.usersService.getUser(receta.authorId);

        if(!userFoud) return new HttpException('User not found', HttpStatus.NOT_FOUND);
        

        const newReceta = this.recetasRepository.create(receta);     
        return this.recetasRepository.save(newReceta);

    }

    getRecetas(){
        return this.recetasRepository.find()
        relations: ['author']
    }

   async getReceta(id:number){
        const recetaFound = await this.recetasRepository.findOne({
            where:{
                id
            },
            relations:['author']
       });
            if(!recetaFound){
                return new HttpException('Use no fout', HttpStatus.NOT_FOUND)           
            }
                return recetaFound;

        }
        
}