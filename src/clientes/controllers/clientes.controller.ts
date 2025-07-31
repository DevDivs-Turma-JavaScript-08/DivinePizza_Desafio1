import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ClientesService } from "../services/clientes.service";
import { Cliente } from "../entities/clientes.entity";

@Controller("/Cliente")
export class ClienteController {
    constructor(private readonly clienteService: ClientesService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Cliente[]> {
        return this.clienteService.findByAll();
    }

    @Get('/id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', PerseIntPipe) id: number): Promise<Cliente>

    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByNome(@Param('nome') nome: string): Promise<Cliente[]> {
        return this.clienteService.findByNome(nome)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() cliente: Cliente): Promise<Cliente> {
        return this.clienteService.create(cliente)
    }

    @Put()
    @HttpCode(HttpCode.OK)
    update(@Body() cliente: Cliente): Promise<Cliente> {
        return this.clienteService.update(cliente)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.clienteService.delete(id)
    }
}