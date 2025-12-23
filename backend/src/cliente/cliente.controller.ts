import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import {
  ApiExtraModels,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateCuentaClienteDto } from 'src/cliente/dto/create-cuenta-cliente.dto';
@ApiTags('Cliente')
@ApiExtraModels(CreateCuentaClienteDto, CreateClienteDto, UpdateClienteDto)
@Controller('api/v1/cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post(':id/cuenta')
  @ApiOperation({ summary: 'Crear una nueva cuenta para un cliente' })
  @ApiResponse({ status: 201, description: 'Cuenta creada exitosamente' })
  @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
  async createCuenta(
    @Param('id', ParseIntPipe) id: number,
    @Body() createCuentaDto: CreateCuentaClienteDto,
  ) {
    // Construir el CreateCuentaDto agregando el cliente_id
    const createCuenta: any = {
      ...createCuentaDto,
      cliente_id: id,
    };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return await this.clienteService.createCuentados(id, createCuenta);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo cliente' })
  @ApiResponse({ status: 201, description: 'Cliente creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Error al crear el cliente' })
  async create(@Body() createClienteDto: CreateClienteDto) {
    return await this.clienteService.create(createClienteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los clientes' })
  @ApiResponse({
    status: 200,
    description: 'Lista de clientes obtenida exitosamente',
    type: [CreateClienteDto],
  })
  async findAll() {
    return await this.clienteService.findAll();
  }

  @Get(':id/cuenta')
  @ApiOperation({ summary: 'Listar todas las cuentas de un cliente' })
  @ApiResponse({ status: 200, description: 'Lista de cuentas obtenida.' })
  async getCuentas(@Param('id', ParseIntPipe) id: number) {
    return await this.clienteService.findCuentasByCliente(id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un cliente por ID' })
  @ApiResponse({ status: 200, description: 'Cliente obtenido exitosamente' })
  @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un cliente por ID' })
  @ApiResponse({ status: 200, description: 'Cliente actualizado exitosamente' })
  @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un cliente por ID' })
  @ApiResponse({ status: 200, description: 'Cliente eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
  remove(@Param('id') id: string) {
    return this.clienteService.remove(+id);
  }
}
