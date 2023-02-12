import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

import { CreateProfileDto } from '../dto/create-profile.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Post()
    createUser(@Body() newUser:CreateUserDto){
        return this.usersService.createUser(newUser)
    }
    @Get()
    getUsers(): Promise<User[]>{
        
        return this.usersService.getUsers();
        

    }
    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id:number){
        return this.usersService.getUser(id);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe)id:number){
        return this.usersService.deleteUser(id)
    }

    @Put(':id/profile')
    updateUser(@Param('id', ParseIntPipe) id:number, @Body() user:UpdateUserDto){
        return this.usersService.updateUser(id,user)
    }

    @Post(':id/profile')
    createProfile(
        @Param('id', ParseIntPipe) id:number, 
        @Body()profile:CreateProfileDto
    ){
        return this.usersService.createProfile(id, profile)
    }
    @Get('profile')
    getProfile(){
        return this.usersService.getProfile();
    }

}

