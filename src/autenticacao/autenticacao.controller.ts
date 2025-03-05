import { Controller, Post, Body } from '@nestjs/common';
import { AutenticacaoService } from './autenticacao.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Autenticação')
@Controller('auth')
export class AutenticacaoController {
  constructor(private readonly autenticacaoService: AutenticacaoService) {}

  @Post('login')
  @ApiOperation({ summary: 'Realizar login' })
  @ApiResponse({ status: 201, description: 'Login realizado com sucesso e token JWT retornado.' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas.' })
  async login(@Body() body: { nome: string, senha: string }) {
    const user = await this.autenticacaoService.validateUser(body.nome, body.senha);
    if (!user) {
      return { statusCode: 401, message: 'Unauthorized' };
    }
    return this.autenticacaoService.login(user);
  }
}
