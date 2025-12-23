import { Cliente } from './cliente.entity';

describe('Preuba de entidad Cliente', () => {
  it('deberia crear una instancia de Cliente', () => {
    const cliente = new Cliente();
    expect(cliente.id).toBeUndefined();
    expect(cliente.nombre).toBe(String);
    expect(cliente.paterno).toBe(String);
    expect(cliente.materno).toBe(String);
    expect(cliente.tipo_documento).toBe(Number);
    expect(cliente.documento_identidad).toBe(String);
    expect(cliente.fecha_nacimiento).toBe(Date);
    expect(cliente).toBeDefined();
  });
});
