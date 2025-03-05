import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFuncionarioDto {
  @ApiProperty({ example: 'João da Silva', description: 'Nome do funcionário' })
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O nome não pode estar vazio' })
  nome: string;

  @ApiProperty({ example: 'Rua Exemplo, 123', description: 'Endereço do funcionário' })
  @IsString({ message: 'O endereço deve ser uma string' })
  endereco: string;

  @ApiProperty({ example: '(11) 99999-9999', description: 'Telefone do funcionário' })
  @IsString({ message: 'O telefone deve ser uma string' })
  telefone: string;
}
