import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class NotificationToken {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  deviceToken: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ nullable: true })
  userAgent: string;

  @ManyToOne(() => User, (user) => user.token)
  user: User;
}
