import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuncionariosService } from './funcionarios.service';
import { FuncionariosController } from './funcionarios.controller';
import { Funcionario } from './funcionario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Funcionario])],
  providers: [FuncionariosService],
  controllers: [FuncionariosController],
  exports: [FuncionariosService],
})
export class FuncionariosModule {}
