import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCuentaDto } from './dto/create-cuenta.dto';
import { UpdateCuentaDto } from './dto/update-cuenta.dto';
import { Cuenta } from './entities/cuenta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Injectable()
export class CuentaService {
  constructor(
    @InjectRepository(Cuenta)
    private readonly cuentaRepository: Repository<Cuenta>,
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}
  async create(createCuentaDto: CreateCuentaDto): Promise<Cuenta> {
    const cliente = await this.clienteRepository.findOneBy({
      id: createCuentaDto.cliente_id,
    });
    if (!cliente) {
      throw new Error('Cliente no encontrado');
    }
    const nuevoCuenta = this.cuentaRepository.create({
      cliente: cliente,
      tipo_producto: createCuentaDto.tipo_producto,
      numero_cuenta: createCuentaDto.numero_cuenta,
      moneda: createCuentaDto.moneda,
      monto: createCuentaDto.monto,
      fecha_creacion: createCuentaDto.fecha_creacion,
      sucursal: createCuentaDto.sucursal,
    });

    return await this.cuentaRepository.save(nuevoCuenta);
  }

  async findAll(): Promise<Cuenta[]> {
    return await this.cuentaRepository.find();
  }

  async findOne(id: number): Promise<Cuenta | null> {
    const cuentab = await this.cuentaRepository.findOneBy({ id });
    if (!cuentab) {
      throw new NotFoundException('Cuenta no encontrada');
    }
    return cuentab;
  }

  async update(
    id: number,
    updateCuentaDto: UpdateCuentaDto,
  ): Promise<Cuenta | null> {
    const cuentab = await this.cuentaRepository.findOneBy({ id });
    if (!cuentab) {
      throw new NotFoundException('Cuenta no encontrada');
    }
    await this.cuentaRepository.update(id, updateCuentaDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const cuentab = await this.cuentaRepository.findOneBy({ id });
    if (!cuentab) {
      throw new NotFoundException('Cuenta no encontrada');
    }
    await this.cuentaRepository.delete(id);
  }
}
