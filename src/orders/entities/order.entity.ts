import { User } from '../../users/entities/user.entity';
import { Product } from './../../products/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @OneToMany((type) => Product, (item) => item.id)
  items: Product[];

  @OneToOne((type) => User, (user) => user.email)
  @JoinColumn()
  user: User;

  @Column()
  subTotal: number;

  @Column({ default: false })
  pending: boolean;
}
