import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';
import { CreateCategoriaDto } from './create-categoria.dto';
import { UpdateCategoriaDto } from './update-categoria.dto';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    const categoria = this.categoriaRepository.create(createCategoriaDto);
    return this.categoriaRepository.save(categoria);
  }

  findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  findOne(id: number): Promise<Categoria> {
    return this.categoriaRepository.findOne({ where: { id } });
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto): Promise<Categoria> {
    return this.categoriaRepository.save({ ...updateCategoriaDto, id });
  }

  async remove(id: number): Promise<void> {
    await this.categoriaRepository.delete(id);
  }
}
