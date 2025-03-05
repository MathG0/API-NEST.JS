import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venda } from './venda.entity';
import { Produto } from '../produtos/produto.entity';
import { Funcionario } from '../funcionarios/funcionario.entity';
import { Usuario } from '../usuarios/usuario.entity';
import { CreateVendaDto } from './create-venda.dto';
import { UpdateVendaDto } from './update-venda.dto';

@Injectable()
export class VendasService {
  constructor(
    @InjectRepository(Venda)
    private readonly vendaRepository: Repository<Venda>,
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
    @InjectRepository(Funcionario)
    private readonly funcionarioRepository: Repository<Funcionario>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Venda[]> {
    return this.vendaRepository.find({
      relations: ['produto', 'funcionario', 'usuario'],
    });
  }

  async findOne(id: number): Promise<Venda> {
    const venda = await this.vendaRepository.findOne({ where: { id }, relations: ['produto', 'funcionario', 'usuario'] });
    if (!venda) {
      throw new NotFoundException(`Venda com ID ${id} não encontrada`);
    }
    return venda;
  }

  async create(createVendaDto: CreateVendaDto): Promise<Venda> {
    const produto = await this.produtoRepository.findOne({
      where: { id: createVendaDto.produtoId },
    });

    const funcionario = await this.funcionarioRepository.findOne({
      where: { id: createVendaDto.funcionarioId },
    });

    const usuario = await this.usuarioRepository.findOne({
      where: { id: createVendaDto.usuarioId },
    });

    const venda = this.vendaRepository.create({
      produto,
      funcionario,
      usuario,
    });

    return this.vendaRepository.save(venda);
  }

  async update(id: number, updateVendaDto: UpdateVendaDto): Promise<Venda> {
    const venda = await this.vendaRepository.findOne({ where: { id } });

    if (!venda) {
      throw new NotFoundException(`Venda com ID ${id} não encontrada`);
    }

    if (updateVendaDto.produtoId) {
      const produto = await this.produtoRepository.findOne({
        where: { id: updateVendaDto.produtoId },
      });
      venda.produto = produto;
    }

    if (updateVendaDto.funcionarioId) {
      const funcionario = await this.funcionarioRepository.findOne({
        where: { id: updateVendaDto.funcionarioId },
      });
      venda.funcionario = funcionario;
    }

    if (updateVendaDto.usuarioId) {
      const usuario = await this.usuarioRepository.findOne({
        where: { id: updateVendaDto.usuarioId },
      });
      venda.usuario = usuario;
    }

    return this.vendaRepository.save(venda);
  }

  async remove(id: number): Promise<void> {
    const venda = await this.vendaRepository.findOne({ where: { id } });

    if (!venda) {
      throw new NotFoundException(`Venda com ID ${id} não encontrada`);
    }

    await this.vendaRepository.delete(id);
  }
}
