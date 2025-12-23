import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { Cuenta } from 'src/cuenta/entities/cuenta.entity';
import { CreateCuentaDto } from 'src/cuenta/dto/create-cuenta.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
    @InjectRepository(Cuenta)
    private readonly cuentaRepository: Repository<Cuenta>,
  ) {}
  async createCuentados(
    clienteId: number,
    createCuentaDto: CreateCuentaDto,
  ): Promise<Cuenta> {
    const cuenta = this.cuentaRepository.create({
      ...createCuentaDto,
      cliente: { id: clienteId },
    });
    return await this.cuentaRepository.save(cuenta);
  }

  async create(createClienteDto: CreateClienteDto) {
    const cliente = this.clienteRepository.create({
      nombre: createClienteDto.nombre,
      paterno: createClienteDto.paterno,
      materno: createClienteDto.materno ?? '',
      tipo_documento: createClienteDto.tipo_documento,
      documento_identidad: createClienteDto.documento_identidad ?? '',
      fecha_nacimiento: createClienteDto.fecha_nacimiento ?? new Date(),
      genero: createClienteDto.genero,
    });
    return this.clienteRepository.save(cliente);
  }

  async findAll(): Promise<Cliente[]> {
    return await this.clienteRepository.find();
  }

  async findOne(id: number): Promise<Cliente | null> {
    const clienteb = await this.clienteRepository.findOneBy({ id });
    if (!clienteb) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }
    return clienteb;
  }

  async findCuentasByCliente(clienteId: number) {
    // Verificamos existencia primero (opcional pero recomendado)
    const cliente = await this.clienteRepository.findOneBy({ id: clienteId });
    if (!cliente) {
      throw new NotFoundException(`Cliente con ID ${clienteId} no encontrado`);
    }

    // Buscamos las cuentas que pertenecen a ese cliente_id
    return await this.cuentaRepository.find({
      where: { cliente: { id: clienteId } },
      order: { fecha_creacion: 'DESC' },
    });
  }

  async update(
    id: number,
    updateClienteDto: UpdateClienteDto,
  ): Promise<Cliente> {
    const clienteb = await this.clienteRepository.findOneBy({ id });
    if (!clienteb) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }
    this.clienteRepository.merge(clienteb, updateClienteDto);
    return this.clienteRepository.save(clienteb);
  }

  async remove(id: number): Promise<void> {
    const clienteb = await this.clienteRepository.findOneBy({ id });
    if (!clienteb) {
      throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    }
    await this.clienteRepository.remove(clienteb);
  }
}
