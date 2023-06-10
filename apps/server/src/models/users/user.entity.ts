import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', width: 50 })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
