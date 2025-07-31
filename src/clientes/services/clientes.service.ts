import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Cliente } from "../entities/clientes.entity";
import { DeleteResult, ILike, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";



@Injectable()
export class ClientesService {

    constructor(
    @InjectRepository(Cliente)
    private clientesRepository: Repository<Cliente>,
  ) {}

    async findByAll(): Promise<Cliente[]> {
        return this.clientesRepository.find()
    }

    async findById(id: number): Promise<Cliente> {

        const cliente = await this.clientesRepository.findOne({
            where: { id }
        });
        if (!cliente) {
            throw new HttpException("Cliente não encontrado", HttpStatus.NOT_FOUND);
        }
        return cliente;
    }

    async findByNome(nome: string): Promise<Cliente[]> {
        return this.clientesRepository.find({
            where: { nome: ILike(`%${nome}%`) }
        });
    }

    async create(cliente: Cliente): Promise<Cliente> {
        return this.clientesRepository.save(cliente);
    }

    async update(cliente: Cliente): Promise<Cliente> {
        const clienteExistente = await this.clientesRepository.findOneBy({ id: cliente.id });
        if (!clienteExistente) {
            throw new HttpException("Cliente não encontrado", HttpStatus.NOT_FOUND);
        }
        return this.clientesRepository.save(cliente);
    }

    async delete(id: number): Promise<DeleteResult> {
        const clienteExistente = await this.clientesRepository.findOneBy({ id });
        if (!clienteExistente) {
            throw new HttpException("Cliente não encontrado", HttpStatus.NOT_FOUND);
        }
        return this.clientesRepository.delete(id);
    }

}
