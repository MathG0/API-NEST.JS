import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Funcionario } from './funcionario.entity';
import { CreateFuncionarioDto } from './create-funcionario.dto';
import { UpdateFuncionarioDto } from './update-funcionario.dto';

@Injectable()
export class FuncionariosService {
  constructor(
    @InjectRepository(Funcionario)
    private readonly funcionarioRepository: Repository<Funcionario>,
  ) {}

  create(createFuncionarioDto: CreateFuncionarioDto): Promise<Funcionario> {
    const funcionario = this.funcionarioRepository.create(createFuncionarioDto);
    return this.funcionarioRepository.save(funcionario);
  }  

  findAll(): Promise<Funcionario[]> {
    return this.funcionarioRepository.find();
  }

  findOne(id: number): Promise<Funcionario> {
    return this.funcionarioRepository.findOne({ where: { id } });
  }

  update(id: number, updateFuncionarioDto: UpdateFuncionarioDto): Promise<Funcionario> {
    return this.funcionarioRepository.save({ ...updateFuncionarioDto, id });
  }

  async remove(id: number): Promise<void> {
    await this.funcionarioRepository.delete(id);
  }
}
