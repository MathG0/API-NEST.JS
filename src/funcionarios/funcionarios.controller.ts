import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { FuncionariosService } from './funcionarios.service';
import { CreateFuncionarioDto } from './create-funcionario.dto';
import { UpdateFuncionarioDto } from './update-funcionario.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('funcionarios')
@ApiBearerAuth()
@Controller('funcionarios')
export class FuncionariosController {
  constructor(private readonly funcionariosService: FuncionariosService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo funcionário' })
  @ApiResponse({ status: 201, description: 'Funcionário criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createFuncionarioDto: CreateFuncionarioDto) {
    return this.funcionariosService.create(createFuncionarioDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtém todos os funcionários' })
  @ApiResponse({ status: 200, description: 'Lista de funcionários obtida com sucesso.' })
  findAll() {
    return this.funcionariosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtém um funcionário pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do funcionário' })
  @ApiResponse({ status: 200, description: 'Funcionário encontrado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Funcionário não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.funcionariosService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza um funcionário pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do funcionário' })
  @ApiResponse({ status: 200, description: 'Funcionário atualizado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Funcionário não encontrado.' })
  update(@Param('id') id: string, @Body() updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.funcionariosService.update(+id, updateFuncionarioDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um funcionário pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do funcionário' })
  @ApiResponse({ status: 200, description: 'Funcionário removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Funcionário não encontrado.' })
  remove(@Param('id') id: string) {
    return this.funcionariosService.remove(+id);
  }
}
