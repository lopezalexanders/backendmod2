import { Controller, Get } from '@nestjs/common';
import { ClientesService } from './clientes.service';

@Controller('api/v1/clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Get()
  async listarClientes() {
    return this.clientesService.listarClientes();
  }
}
