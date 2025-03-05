import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { VendasService } from './vendas.service';
import { CreateVendaDto } from './create-venda.dto';
import { UpdateVendaDto } from './update-venda.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Vendas')
@ApiBearerAuth()
@Controller('vendas')
export class VendasController {
  constructor(private readonly vendasService: VendasService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova venda' })
  @ApiResponse({ status: 201, description: 'Venda criada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Parâmetros inválidos.' })
  create(@Body() createVendaDto: CreateVendaDto) {
    return this.vendasService.create(createVendaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as vendas' })
  @ApiResponse({ status: 200, description: 'Lista de vendas.' })
  findAll() {
    return this.vendasService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter detalhes de uma venda' })
  @ApiResponse({ status: 200, description: 'Detalhes da venda.' })
  @ApiResponse({ status: 404, description: 'Venda não encontrada.' })
  findOne(@Param('id') id: string) {
    return this.vendasService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar uma venda existente' })
  @ApiResponse({ status: 200, description: 'Venda atualizada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Venda não encontrada.' })
  update(@Param('id') id: string, @Body() updateVendaDto: UpdateVendaDto) {
    return this.vendasService.update(+id, updateVendaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma venda' })
  @ApiResponse({ status: 200, description: 'Venda removida com sucesso.' })
  @ApiResponse({ status: 404, description: 'Venda não encontrada.' })
  remove(@Param('id') id: string) {
    return this.vendasService.remove(+id);
  }
}
