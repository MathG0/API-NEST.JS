import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Categoria } from '../categorias/categoria.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('produtos')
export class Produto {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Identificador único do produto' })
  id: number;

  @Column()
  @ApiProperty({ example: 'Notebook', description: 'Nome do produto' })
  nome: string;

  @Column('decimal', { precision: 10, scale: 2 })
  @ApiProperty({ example: 1999.99, description: 'Preço do produto' })
  preco: number;

  @ManyToOne(() => Categoria, (categoria) => categoria.produtos)
  @ApiProperty({ type: () => Categoria, description: 'Categoria associada ao produto' })
  categoria: Categoria;
  vendas: any;
}
