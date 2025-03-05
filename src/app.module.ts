import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProdutosModule } from './produtos/produtos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { VendasModule } from './vendas/vendas.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './autenticacao/jwt-auth.guard';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'meusistemasvenda',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsuariosModule, AutenticacaoModule,
    UsuariosModule,
    ProdutosModule,
    CategoriasModule,
    FuncionariosModule,
    VendasModule,
  ],
})
export class AppModule {}
