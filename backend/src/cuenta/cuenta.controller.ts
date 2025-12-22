import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CuentaService } from './cuenta.service';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Cuenta')
@Controller('/api/v1/cuenta')
export class CuentaController {
  constructor(private readonly cuentaService: CuentaService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva cuenta' })
  @ApiResponse({ status: 201, description: 'Cuenta creada exitosamente' })
  @ApiResponse({ status: 400, description: 'Error al crear la cuenta' })
  create(@Body() createCuentaDto: CreateCuentaDto) {
    return this.cuentaService.create(createCuentaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las cuentas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de cuentas obtenida exitosamente',
  })
  findAll() {
    return this.cuentaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una cuenta por ID' })
  @ApiResponse({ status: 200, description: 'Cuenta obtenida exitosamente' })
  @ApiResponse({ status: 404, description: 'Cuenta no encontrada' })
  findOne(@Param('id') id: string) {
    return this.cuentaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una cuenta por ID' })
  @ApiResponse({ status: 200, description: 'Cuenta actualizada exitosamente' })
  @ApiResponse({ status: 404, description: 'Cuenta no encontrada' })
  update(@Param('id') id: string, @Body() updateCuentaDto: UpdateCuentaDto) {
    return this.cuentaService.update(+id, updateCuentaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una cuenta por ID' })
  @ApiResponse({ status: 200, description: 'Cuenta eliminada exitosamente' })
  @ApiResponse({ status: 404, description: 'Cuenta no encontrada' })
  remove(@Param('id') id: string) {
    return this.cuentaService.remove(+id);
  }
}
