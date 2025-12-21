drop schema if exists public cascade;
create schema public;

create table cliente(
    id serial primary key,
    nombre varchar default '',
    paterno varchar default '',
    materno varchar default '',
    tipo_documento integer default 0,
    documento_identidad varchar default '',
    fecha_nacimiento date default '1900-01-01',
    genero varchar default '',
    fecha_creacion timestamp default current_timestamp
);

create table cuenta(
    id serial primary key,
    cliente_id integer,
    tipo_producto varchar default '',
    numero_cuenta integer unique,
    moneda  varchar default 'BOB',
    monto decimal(12,2) default 0.00,
    fecha_creacion timestamp default current_timestamp,
    sucursal varchar default 'La Paz',
    foreign key (cliente_id) references cliente(id)
);
