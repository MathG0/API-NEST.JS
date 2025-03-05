import { IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVendaDto {
  @ApiProperty({ example: 1, description: 'ID do Produto' })
  @IsNumber()
  @IsNotEmpty({ message: 'O campo produtoId não pode estar vazio' })
  produtoId: number;

  @ApiProperty({ example: 2, description: 'ID do Funcionário' })
  @IsNumber()
  @IsNotEmpty({ message: 'O campo funcionarioId não pode estar vazio' })
  funcionarioId: number;

  @ApiProperty({ example: 3, description: 'ID do Usuário' })
  @IsNumber()
  @IsNotEmpty({ message: 'O campo usuarioId não pode estar vazio' })
  usuarioId: number;
}