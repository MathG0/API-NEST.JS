import { Controller, Post, Body } from '@nestjs/common';
import { AutenticacaoService } from './autenticacao.service';

@Controller('auth')
export class AutenticacaoController {
  constructor(private readonly autenticacaoService: AutenticacaoService) {}

  @Post('login')
  async login(@Body() body: { nome: string, senha: string }) {
    const user = await this.autenticacaoService.validateUser(body.nome, body.senha);
    if (!user) {
      return { statusCode: 401, message: 'Unauthorized' };
    }
    return this.autenticacaoService.login(user);
  }
}