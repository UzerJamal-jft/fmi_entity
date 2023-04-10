import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Base } from "./base.entity";
import { Contact } from "./contact.entity";
import { User } from "./user.entity";
import { Address } from "./address.entity";
import { Tax } from "./tax.entity";

@Entity()
export class Client extends Base {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @Generated("increment")
  trackingId: number;

  @Column()
  name: string;

  @Column({ length: 10, nullable: true }) // max 10 chars
  shortCode: string;

  @Column({ nullable: true })
  logoUrl: string; //logoUrl

  @Column({ type: Boolean, default: true })
  isActive: boolean;

  @OneToOne(() => Contact, { cascade: true }) // One to many
  @JoinColumn()
  contact: Contact;

  @ManyToMany(() => Address, { cascade: true })
  @JoinTable()
  address: Address[];

  @OneToMany(() => User, (user) => user.client)
  user: User[];

  //tax
  @ManyToMany(() => Tax, (tax) => tax.client)
  @JoinTable()
  tax: Tax[];
}
