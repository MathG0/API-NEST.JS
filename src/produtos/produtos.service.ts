import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './produto.entity';
import { CreateProdutoDto } from './create-produto.dto';
import { UpdateProdutoDto } from './update-produto.dto';
import { Categoria } from '../categorias/categoria.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private readonly produtoRepository: Repository<Produto>,
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  async create(createProdutoDto: CreateProdutoDto): Promise<Produto> {
    const categoria = await this.categoriaRepository.findOne({
      where: { id: createProdutoDto.categoriaId },
    });

    const produto = this.produtoRepository.create({
      ...createProdutoDto,
      categoria,
    });

    return this.produtoRepository.save(produto);
  }

  findAll(): Promise<Produto[]> {
    return this.produtoRepository.find({ relations: ['categoria'] });
  }

  findOne(id: number): Promise<Produto> {
    return this.produtoRepository.findOne({ where: { id }, relations: ['categoria'] });
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto): Promise<Produto> {
    return this.produtoRepository.save({ ...updateProdutoDto, id });
  }

  async remove(id: number): Promise<void> {
    await this.produtoRepository.delete(id);
  }
}
