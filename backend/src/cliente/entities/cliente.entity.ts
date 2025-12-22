import { Cuenta } from 'src/cuenta/entities/cuenta.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 100, default: '' })
  nombre: string;
  @Column({ type: 'varchar', length: 100, default: '' })
  paterno: string;
  @Column({ type: 'varchar', length: 100, default: '' })
  materno: string;
  @Column({ type: 'int', default: 0 })
  tipo_documento: number;
  @Column({ type: 'varchar', length: 100, default: '' })
  documento_identidad: string;
  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
  fecha_nacimiento: Date;
  @Column({ type: 'varchar', length: 10, default: '' })
  genero: string;
  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
  fecha_creacion: Date;
  @OneToMany(() => Cuenta, (cuenta) => cuenta.cliente)
  cuenta: Cuenta[];
}
