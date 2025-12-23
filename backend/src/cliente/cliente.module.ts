import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Cuenta } from 'src/cuenta/entities/cuenta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente, Cuenta])],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
