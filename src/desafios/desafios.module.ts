import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DesafiosController } from './desafios.controller';
import { DesafiosService } from './desafios.service';
import { DesafioSchema } from './interfaces/desafio.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Desafio', schema: DesafioSchema }]),
  ],
  providers: [DesafiosService],
  controllers: [DesafiosController],
})
export class DesafiosModule {}
