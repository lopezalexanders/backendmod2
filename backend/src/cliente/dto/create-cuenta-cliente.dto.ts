import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsEnum,
  Min,
  IsInt,
} from 'class-validator';

export class CreateCuentaClienteDto {
  @ApiProperty({ example: 'Caja de Ahorro' })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  tipo_producto: string;

  @ApiProperty({ example: '1000000456', description: 'Número de cuenta único' })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsInt()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  numero_cuenta: number;

  @ApiProperty({ example: 'BOB', enum: ['BOB', 'USD'] })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsEnum(['BOB', 'USD'])
  moneda: string;

  @ApiProperty({ example: 500.0 })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNumber()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Min(0)
  monto: number;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  fecha_creacion: Date;

  @ApiProperty({ example: 'Sucre' })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  sucursal: string;
}
