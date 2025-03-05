import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUsuarioDto {
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O nome não pode estar vazio' })
  nome: string;

  @IsString({ message: 'O endereço deve ser uma string' })
  endereco: string;

  @IsString({ message: 'O telefone deve ser uma string' })
  telefone: string;

  @IsString({ message: 'A senha deve ser uma string' })
  @IsNotEmpty({ message: 'A senha não pode estar vazia' })
  senha: string;
}
