import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column()
  full_name: string;

  @Column({ default: 0 })
  achievements_id: number;

  @Column({ nullable: true })
  gender: string;

  @Column({ default: new Date().toLocaleDateString() })
  created_at: Date;
}
