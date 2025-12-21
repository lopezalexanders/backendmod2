import { Module } from '@nestjs/common';
import { ClientesModule } from './clientes/clientes.module';
import { CuentasModule } from './cuentas/cuentas.module';
@Module({
  imports: [ClientesModule, CuentasModule],
})
export class AppModule {}
