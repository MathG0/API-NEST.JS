import { IsString, IsOptional, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProdutoDto {
  @ApiPropertyOptional({ example: 'Notebook', description: 'Nome do produto' })
  @IsString({ message: 'O nome deve ser uma string' })
  @IsOptional()
  nome?: string;

  @ApiPropertyOptional({ example: 1999.99, description: 'Preço do produto' })
  @IsNumber({}, { message: 'O preço deve ser um número' })
  @IsOptional()
  preco?: number;

  @ApiPropertyOptional({ example: 1, description: 'ID da categoria' })
  @IsNumber({}, { message: 'O ID da categoria deve ser um número' })
  @IsOptional()
  categoriaId?: number;
}
