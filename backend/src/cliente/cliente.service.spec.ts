import { Test, TestingModule } from '@nestjs/testing';
import { ClienteService } from './cliente.service';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ClienteService', () => {
  let service: ClienteService;
  let repositoryMock: jest.Mocked<Partial<Repository<Cliente>>>;

  beforeEach(async () => {
    repositoryMock = {
      // You can mock methods as needed, e.g.:
      find: jest.fn(),
      create: jest.fn(),
      findOne: jest.fn(),
      save: jest.fn(),
      findOneBy: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClienteService,
        {
          provide: getRepositoryToken(Cliente),
          useValue: repositoryMock,
        },
      ],
    }).compile();

    service = module.get<ClienteService>(ClienteService);
    repositoryMock = module.get<Repository<Cliente>>(
      getRepositoryToken(Cliente),
    ) as jest.Mocked<Partial<Repository<Cliente>>>;
  });

  it('Deberia estar definido', () => {
    expect(service).toBeDefined();
  });
  it('deberia crear un cliente', async () => {
    const clienteData = {
      nombre: 'Juan',
      paterno: 'Perez',
      materno: 'Gomez',
      tipo_documento: 1,
      documento_identidad: '12345678',
      fecha_nacimiento: new Date('1990-01-01'),
      genero: 'M',
    };
    const createdCliente = { id: 1, ...clienteData };
    (repositoryMock.create as jest.Mock).mockReturnValue(createdCliente);
    (repositoryMock.save as jest.Mock).mockResolvedValue(createdCliente);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const result = await service.create(clienteData as any);
    expect(result).toEqual(createdCliente);
  });
});
