import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Venda } from '../vendas/venda.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('funcionarios')
export class Funcionario {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Identificador único do funcionário' })
  id: number;

  @Column()
  @ApiProperty({ example: 'João da Silva', description: 'Nome do funcionário' })
  nome: string;

  @Column()
  @ApiProperty({ example: 'Rua Exemplo, 123', description: 'Endereço do funcionário' })
  endereco: string;

  @Column()
  @ApiProperty({ example: '(11) 99999-9999', description: 'Telefone do funcionário' })
  telefone: string;

  @OneToMany(() => Venda, (venda) => venda.funcionario)
  @ApiProperty({ type: () => [Venda], description: 'Lista de vendas associadas ao funcionário' })
  vendas: Venda[];
}
