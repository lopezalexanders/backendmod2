import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clientes } from './clientes';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Clientes)
    private clienteRespositorio: Repository<Clientes>,
  ) {}
  async listarClientes() {
    const lista = await this.clienteRespositorio.find();
    return lista;
  }
}
