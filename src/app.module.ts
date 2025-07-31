import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IS_DIVISIBLE_BY } from 'class-validator';
import { Cliente } from './clientes/entities/clientes.entity';
import { ClienteModule } from './clientes/clientes.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port:  3306,
    username: 'root',
    password: 'rootroot',
    database: 'db_divinepizza',
    entities: [Cliente],
    synchronize: true, 
    logging: true,
  }),
ClienteModule,
],
controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
