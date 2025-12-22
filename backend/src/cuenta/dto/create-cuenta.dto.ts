import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCuentaDto {
  @ApiProperty({
    example: '1',
    description: 'ID del Cliente',
  })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsInt()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  cliente_id: number;

  @ApiProperty({
    example: 'Ahorro',
    description: 'Tipo de Producto',
  })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  tipo_producto: string;

  @ApiProperty({
    example: '123456789',
    description: 'Número de Cuenta',
  })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsInt()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  numero_cuenta: number;

  @ApiProperty({
    example: 'BOB',
    description: 'Moneda',
  })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  moneda: string;

  @ApiProperty({
    example: 1000.5,
    description: 'Monto Inicial',
  })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsInt()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  monto: number;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  fecha_creacion: Date;

  @ApiProperty({
    example: 'Sucursal 1',
    description: 'Sucursal donde se creó la cuenta',
  })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  sucursal: string;
}
