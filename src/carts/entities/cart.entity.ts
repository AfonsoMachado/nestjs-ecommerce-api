import { Product } from '../../products/entities/product.entity';
import { User } from '../../users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  total: number;

  @Column()
  quantity: number;

  @ManyToOne((type) => Product, (order) => order.id)
  @JoinColumn()
  item: Product;

  @ManyToOne((type) => User, (user) => user.email)
  @JoinColumn()
  user: User;
}
