import { IsString, IsOptional } from 'class-validator';

export class UpdateUsuarioDto {
  @IsString()
  @IsOptional()
  nome?: string;

  @IsString()
  @IsOptional()
  endereco?: string;

  @IsString()
  @IsOptional()
  telefone?: string;

  @IsString()
  @IsOptional()
  senha?: string;
}
