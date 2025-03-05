import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Venda } from '../vendas/venda.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Identificador único do usuário' })
  id: number;

  @Column()
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O nome não pode estar vazio' })
  @ApiProperty({ example: 'João Silva', description: 'Nome do usuário' })
  nome: string;

  @Column()
  @IsString({ message: 'O endereço deve ser uma string' })
  @ApiProperty({ example: 'Rua das Flores, 123', description: 'Endereço do usuário' })
  endereco: string;

  @Column()
  @IsString({ message: 'O telefone deve ser uma string' })
  @ApiProperty({ example: '(11) 99999-9999', description: 'Telefone do usuário' })
  telefone: string;

  @Column()
  @IsString({ message: 'A senha deve ser uma string' })
  @IsNotEmpty({ message: 'A senha não pode estar vazia' })
  @ApiProperty({ example: 'senha123', description: 'Senha do usuário' })
  senha: string;

  @OneToMany(() => Venda, (venda) => venda.usuario)
  @ApiProperty({ type: () => [Venda], description: 'Lista de vendas associadas ao usuário' })
  vendas: Venda[];
}
