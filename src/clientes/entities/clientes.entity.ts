// Define a tabela "tb_clientes".1
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'tb_clientes' })
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  endereco: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  email: string;

  @IsNotEmpty()
  @Column({ length: 20, nullable: false })
  ultimoPedido: string;

  @IsNotEmpty()
  @Column({ nullable: false })
  quantPedido: number;

  @IsNotEmpty()
  @Column({ length: 20, nullable: false })
  telefone: string;
}
