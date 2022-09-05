import { Cart } from '../../carts/entities/cart.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  quantity: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updtedAt: Date;

  @OneToMany((type) => Cart, (cart) => cart.id)
  @JoinColumn()
  cart: Cart[];
}
