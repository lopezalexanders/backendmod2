import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';
import { CuentaModule } from './cuenta/cuenta.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'backenddb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ClienteModule,
    CuentaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
