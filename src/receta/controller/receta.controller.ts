import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CreateRecetaDto } from "../dto/create-receta.dto";
import { RecetasService } from "../service/receta.service";
import { Receta } from "../entities/receta.entity";

@Controller('recetas')
export class RecetaController {
    constructor(private recetasService:RecetasService){}

    @Post()
    createrReceta(@Body() receta:CreateRecetaDto){
        return this.recetasService.createReceta(receta);
    }

    @Get()
    getRecetas(): Promise<Receta[]>{
        return this.recetasService.getRecetas()

    }
    

    @Get(':id')
    getReceta(@Param('id', ParseIntPipe)id:number){
        return this.recetasService.getReceta(id);
    }
   
}

