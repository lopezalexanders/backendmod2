import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @ApiProperty({
    example: 'Martin',
    description: 'Nombre del Cliente',
  })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  nombre: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @ApiProperty({
    example: 'Lopez',
    description: 'Apellido Paterno',
  })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  paterno: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @ApiProperty({
    example: 'Gonzalez',
    description: 'Apellido Materno',
  })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  materno: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @ApiProperty({
    example: 1,
    description: 'Tipo de Documento',
  })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  tipo_documento: number;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  documento_identidad: string;

  fecha_nacimiento: Date;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  genero: string;
}
