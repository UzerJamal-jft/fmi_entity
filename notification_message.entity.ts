import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class NotificationMessage {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  message: string;

  @ManyToMany(() => User, (user) => user.notificationMessage)
  @JoinTable()
  user: User[];

  @Column({ default: false })
  read: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;
}
