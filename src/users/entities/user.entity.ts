import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  full_name: string;

  @Column({ default: 0 })
  achievements_id: number;

  @Column({ default: new Date().toLocaleDateString() })
  created_at: Date;
}
