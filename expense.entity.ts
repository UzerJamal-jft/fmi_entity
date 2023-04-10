import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Expense_Types } from "./expense_types.entity";
import { Trip } from "./trip.entity";
import { Ticket } from "./ticket.entity";
import { Vendor } from "./vendor.entity";
import { ResourceFiles } from "./resourceFiles.entity";
import { EXPENSE_STATUS } from "../constant/status.enum";

@Entity()
export class Expense {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @ManyToOne(() => Trip, (trip) => trip.expense)
  @JoinColumn()
  trip: Trip;

  @Column("float", { default: 0 })
  amount: number;

  @Column("float", { default: 0 })
  tax: number;

  @Column("float", { default: 0 })
  total: number;

  @Column()
  purchasedBy: string;

  @Column({ default: false })
  splitExpense: boolean;

  @Column("float", { nullable: true })
  partAmount: number;

  @Column({ default: 1 })
  quantity: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Expense_Types)
  type: Expense_Types;

  @ManyToOne(() => Ticket, (ticket) => ticket.expenses)
  ticket: Ticket;

  @ManyToOne(() => Vendor, (vendor) => vendor.expense)
  vendor: Vendor;

  @OneToMany(() => ResourceFiles, (resourcesFiles) => resourcesFiles.expense)
  resourceFiles: ResourceFiles[];

  @Column()
  entryBy: string;

  @Column({ default: EXPENSE_STATUS.PENDING })
  status: EXPENSE_STATUS;

  @Column({ default: true })
  isActive: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  setTotal() {
    if (this.splitExpense) {
      this.total = this.partAmount;
    } else {
      this.total = this.amount;
    }
  }
}
