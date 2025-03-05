import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProdutoDto {
  @ApiProperty({ example: 'Notebook', description: 'Nome do produto' })
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O nome não pode estar vazio' })
  nome: string;

  @ApiProperty({ example: 1999.99, description: 'Preço do produto' })
  @IsNumber({}, { message: 'O preço deve ser um número' })
  @IsNotEmpty({ message: 'O preço não pode estar vazio' })
  preco: number;

  @ApiProperty({ example: 1, description: 'ID da categoria' })
  @IsNumber({}, { message: 'O ID da categoria deve ser um número' })
  categoriaId: number;
}
