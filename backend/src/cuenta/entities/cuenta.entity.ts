import { Cliente } from 'src/cliente/entities/cliente.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Cuenta {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'int', default: 0 })
  tipo_producto: string;
  @Column({ type: 'int', unique: true })
  numero_cuenta: number;
  @Column({ type: 'varchar', length: 3, default: 'BOB' })
  moneda: string;
  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0.0 })
  monto: number;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_creacion: Date;
  @Column({ type: 'varchar', length: 100, default: '' })
  sucursal: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.cuenta)
  @JoinColumn({ name: 'cliente_id' })
  cliente: Cliente;
}
