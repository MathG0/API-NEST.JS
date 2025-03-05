import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { Produto } from './produto.entity';
import { Categoria } from '../categorias/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produto, Categoria])],
  providers: [ProdutosService],
  controllers: [ProdutosController],
  exports: [ProdutosService],
})
export class ProdutosModule {}
