insert into cliente(nombre, paterno, materno, tipo_documento, documento_identidad, fecha_nacimiento, genero) values
('Vincenty', 'Funes', 'Cesar', 1, '12345678', '1990-01-01', 'Masculino'),
('Vincenty', 'Funes', 'Nilton', 1, '87654321', '1992-01-01', 'Masculino');

insert into cuenta(cliente_id,tipo_producto,numero_cuenta,moneda,monto,fecha_creacion,sucursal) values
(1, 'Ahorro', 123456, 'BOB', 1000.00, current_timestamp, 'La Paz'),
(2, 'Corriente', 654321, 'BOB', 2000.00, current_timestamp, 'Santa Cruz');
