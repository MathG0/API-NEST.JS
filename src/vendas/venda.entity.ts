import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';
import { Produto } from '../produtos/produto.entity';
import { Funcionario } from '../funcionarios/funcionario.entity';

@Entity('vendas')
export class Venda {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Produto, (produto) => produto.vendas)
  produto: Produto;

  @ManyToOne(() => Funcionario, (funcionario) => funcionario.vendas)
  funcionario: Funcionario;

  @ManyToOne(() => Usuario, (usuario) => usuario.vendas)
  usuario: Usuario;
}
