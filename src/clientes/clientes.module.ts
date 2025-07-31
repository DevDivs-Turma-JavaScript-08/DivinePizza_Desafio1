import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cliente } from "./entities/clientes.entity";
import { ClientesService } from "./services/clientes.service";
import { ClienteController } from "./controllers/clientes.controller";

// Module/Entidade tem a função de agrupar e mapear os componentes.
@Module({
    imports: [TypeOrmModule.forFeature([Cliente])],
    providers: [ClientesService],
    controllers: [ClienteController],
    exports: [TypeOrmModule]
})
export class ClienteModule {}