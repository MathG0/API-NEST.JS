import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from '../usuarios/usuarios.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AutenticacaoService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(nome: string, senha: string): Promise<any> {
    const usuario = await this.usuariosService.findByName(nome);
    if (usuario && await bcrypt.compare(senha, usuario.senha)) {
      const { senha, ...result } = usuario;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { nome: user.nome, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
