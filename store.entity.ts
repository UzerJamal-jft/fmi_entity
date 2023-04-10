import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Base } from "./base.entity";
import { Client } from "./client.entity";
import { User } from "./user.entity";
import { Ticket } from "./ticket.entity";
import { Address } from "./address.entity";
import { Contact } from "./contact.entity";

@Entity()
export class Store extends Base {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @Generated("increment")
  trackingId: number;

  @ManyToOne(() => Client)
  @JoinColumn()
  client: Client;

  @OneToMany(() => User, (user) => user.store)
  @JoinColumn()
  user: User[];

  @OneToMany(() => Ticket, (ticket) => ticket.store)
  @JoinColumn()
  ticket: Ticket[];

  @ManyToOne(() => Address)
  address: Address;

  @ManyToOne(() => Contact)
  contact: Contact;

  @Column()
  storeName: string;

  // @Column({ nullable: true })
  // logoUrl: string;

  @Column({ nullable: true })
  mall: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: false })
  shouldCreateUsers: boolean;
}
