import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateFuncionarioDto {
  @ApiPropertyOptional({ example: 'João da Silva', description: 'Nome do funcionário' })
  @IsString({ message: 'O nome deve ser uma string' })
  @IsOptional()
  nome?: string;

  @ApiPropertyOptional({ example: 'Rua Exemplo, 123', description: 'Endereço do funcionário' })
  @IsString({ message: 'O endereço deve ser uma string' })
  @IsOptional()
  endereco?: string;

  @ApiPropertyOptional({ example: '(11) 99999-9999', description: 'Telefone do funcionário' })
  @IsString({ message: 'O telefone deve ser uma string' })
  @IsOptional()
  telefone?: string;
}
