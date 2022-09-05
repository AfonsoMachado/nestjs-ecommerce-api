import { ApiProperty } from '@nestjs/swagger';
import { Cart } from '../../carts/entities/cart.entity';
import { Order } from '../../orders/entities/order.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ unique: true })
  email: string;

  @ApiProperty()
  @Column()
  password: string;

  @Column()
  role: string;

  @ApiProperty()
  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany((type) => Cart, (cart) => cart.id)
  @JoinColumn()
  cart: Cart[];

  @OneToOne((type) => Order, (order) => order.id)
  @JoinColumn()
  order: Order;
}
