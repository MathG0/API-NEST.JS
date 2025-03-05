import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AutenticacaoService } from './autenticacao.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private autenticacaoService: AutenticacaoService) {
    super({
      usernameField: 'nome',
      passwordField: 'senha',
    });
  }

  async validate(nome: string, senha: string): Promise<any> {
    const user = await this.autenticacaoService.validateUser(nome, senha);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
