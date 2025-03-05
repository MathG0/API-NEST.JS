import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendasService } from './vendas.service';
import { VendasController } from './vendas.controller';
import { Venda } from './venda.entity';
import { Produto } from '../produtos/produto.entity';
import { Funcionario } from '../funcionarios/funcionario.entity';
import { Usuario } from '../usuarios/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Venda, Produto, Funcionario, Usuario])
  ],
  providers: [VendasService],
  controllers: [VendasController],
  exports: [VendasService],
})
export class VendasModule {}
