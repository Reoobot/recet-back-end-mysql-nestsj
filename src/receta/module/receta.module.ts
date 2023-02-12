import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/module/users.module';
import { RecetaController } from '../controller/receta.controller';
import { Receta } from '../entities/receta.entity';
import { RecetasService } from '../service/receta.service';


@Module({
    imports: [
        TypeOrmModule.forFeature([Receta]), UsersModule],
        controllers: [RecetaController],
        providers: [RecetasService],
        exports: [RecetasService]

})
export class RecetasModule {}
