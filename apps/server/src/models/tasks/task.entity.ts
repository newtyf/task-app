import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', width: 50 })
  title: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'boolean' })
  done: boolean;

  @ManyToOne(() => User, (user) => user.tasks)
    user: User

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
