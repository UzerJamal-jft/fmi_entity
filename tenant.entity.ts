import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Address } from "./address.entity";
import { Contact } from "./contact.entity";

@Entity()
export class Tenant {
  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({
    nullable: true,
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  lastUpdated: Date;

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  shortCode: string;

  @Column({ nullable: true })
  logoUrl: string;

  @Column({ nullable: true })
  industry: string;

  @ManyToMany(() => Address, { cascade: true })
  @JoinTable()
  address: Address[];

  @ManyToOne(() => Contact, { cascade: true })
  @JoinColumn()
  contact: Contact;

  @Column({ default: true, nullable: true })
  isActive: boolean;

  @Column({ unique: true })
  domainName: string;

  @BeforeInsert()
  createDate(): Date {
    this.createdAt = new Date();
    return this.createdAt;
  }

  @BeforeUpdate()
  updateDate(): Date {
    this.lastUpdated = new Date();
    return this.lastUpdated;
  }
}
