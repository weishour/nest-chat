import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'chats' })
export class Chat {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  userName: string;

  @Column({ nullable: true })
  socketId: string;
}
