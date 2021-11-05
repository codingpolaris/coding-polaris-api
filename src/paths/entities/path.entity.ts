import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Path {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  level: number;

  @Column()
  acess: number;
}
