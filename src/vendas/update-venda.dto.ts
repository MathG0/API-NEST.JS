import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional, PartialType  } from '@nestjs/swagger';
import { CreateVendaDto } from './create-venda.dto';

export class UpdateVendaDto extends PartialType(CreateVendaDto) {}


export class UpdateUsuarioDto {
  @ApiPropertyOptional({ example: 'João Silva', description: 'Nome do usuário' })
  @IsString({ message: 'O nome deve ser uma string' })
  @IsOptional()
  nome?: string;

  @ApiPropertyOptional({ example: 'Rua das Flores, 123', description: 'Endereço do usuário' })
  @IsString({ message: 'O endereço deve ser uma string' })
  @IsOptional()
  endereco?: string;

  @ApiPropertyOptional({ example: '(11) 99999-9999', description: 'Telefone do usuário' })
  @IsString({ message: 'O telefone deve ser uma string' })
  @IsOptional()
  telefone?: string;

  @ApiPropertyOptional({ example: 'senha123', description: 'Senha do usuário' })
  @IsString({ message: 'A senha deve ser uma string' })
  @IsOptional()
  senha?: string;
}
