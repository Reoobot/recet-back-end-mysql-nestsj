import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/profile/profile.entity';
import { Repository } from 'typeorm';
import { CreateProfileDto } from '../dto/create-profile.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';



@Injectable()
export class UsersService {
    ////___________________VALIDAR USUARIO CUANDO YA EXISTE EN LA BASE DE DATOS_________________
  constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Profile) private profileRepository: Repository<Profile>
    ){}

    // createUser(user: CreateUserDto){
    //     const newUser = this.userRepository.create(user)
    //     return this.userRepository.save(newUser)
    // }
    ///__________PARA LA VALIDACION________

    async createUser(user: CreateUserDto){

       const userFoud = await this.userRepository.findOne({
            where:{
                username:user.username
            }
        })

        if(userFoud){
            return new HttpException('User already exists', HttpStatus.CONFLICT)
        }

        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }

    ////___________________VALIDAR USUARIO CUANDO YA EXISTE EN LA BASE DE DATOS_________________

    getUsers(){
        return this.userRepository.find()
    }


    // getUser(id:number){
    //     return this.userRepository.findOne({where:{id}})
    // }

    ///__________PARA LA VALIDACION________

    async getUser(id:number){
        const userFound = await this.userRepository.findOne({
            where:{
            id
        },
        relations:['recetas', 'post','profile' ]     
    });
       

        if(!userFound){
            return new HttpException('User not found', HttpStatus. NOT_FOUND)
        }
        return userFound;
    }
    ////___________________VALIDAR USUARIO CUANDO NO EXISTE EN LA BASE DE DATOS ALGUN USUARIO_________________


    // deleteUser(id:number){
    //     return this.userRepository.delete({id})
    // }
     ///__________PARA LA VALIDACION________

    async deleteUser(id:number){
       const result = await this.userRepository.delete({id});

       if(result.affected === 0){
        return new HttpException('User not found', HttpStatus.NOT_FOUND)
         }
         return result
    }
 ////___________________VALIDAR USUARIO CUANDO YA HA SIDO BORRADO Y NO EXISTE EN LA BASE DE DATOS ALGUN USUARIO_________________


    async updateUser(id:number, user:UpdateUserDto){
        const userFoud = await this.userRepository.findOne({where:{id}});
        if(!userFoud) {
            return new HttpException('User not found', HttpStatus.NOT_FOUND)
        }
        const updateUser = Object.assign(userFoud, user);
        return this.userRepository.save(updateUser);
    }

    async createProfile(id: number, profile:CreateProfileDto){
        const userFoud = await this.userRepository.findOne({ where: {id,}})
        
        if(!userFoud) {
            return new HttpException('User not found', HttpStatus.NOT_FOUND)
        }

        const newProfile = this.profileRepository.create(profile)
        const savedProfile = await this.profileRepository.save(newProfile)
        userFoud.profile = savedProfile

        return this.userRepository.save(userFoud)

    }

    getProfile(){
        return this.profileRepository.find()
    }


}
