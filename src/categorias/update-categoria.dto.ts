import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCategoriaDto {
  @ApiPropertyOptional({ example: 'Eletrônicos', description: 'Nome da categoria' })
  @IsString({ message: 'O nome deve ser uma string' })
  @IsOptional()
  nome?: string;
}
