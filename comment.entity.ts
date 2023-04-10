import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Ticket } from "./ticket.entity";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ nullable: true })
  subject: string;

  @Column()
  comment: string;

  @Column()
  type: string;

  @Column({ default: false })
  isPinned: boolean;

  @ManyToOne(() => Ticket, (ticket) => ticket.comment)
  ticket: Ticket;
}
