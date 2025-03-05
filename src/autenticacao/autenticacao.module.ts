import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { AutenticacaoService } from './autenticacao.service';
import { AutenticacaoController } from './autenticacao.controller';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    UsuariosModule,
    PassportModule,
    JwtModule.register({
      secret: 'minhaSecretKey',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AutenticacaoService, JwtStrategy, LocalStrategy],
  controllers: [AutenticacaoController],
})
export class AutenticacaoModule {}
