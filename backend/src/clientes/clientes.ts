import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Clientes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 100 })
  paterno: string;

  @Column({ type: 'varchar', length: 100 })
  materno: string;

  @Column({ type: 'int' })
  tipo_documento: number;

  @Column({ type: 'varchar', length: 100 })
  documento_identidad: string;

  @Column({ type: 'date' })
  fecha_nacimiento: Date;

  @Column({ type: 'varchar', length: 10 })
  genero: string;

  @Column({ type: 'date' })
  fecha_creacion: Date;
}
