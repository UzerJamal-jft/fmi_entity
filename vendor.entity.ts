import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Trades } from "./trades.entity";
import { Trip } from "./trip.entity";
import { User } from "./user.entity";
import { Address } from "./address.entity";
import { VendorW9 } from "./vendorW9.entity";
import { VendorContract } from "./vendorContract.entity";
import { VendorInsurance } from "./vendorInsurance.entity";
import { TicketVendor } from "./ticket_vendor.entity";
import { Technician } from "./technicain.entity";
import { Estimate } from "./estimate.entity";
import { Expense } from "./expense.entity";
import { ResourceFiles } from "./resourceFiles.entity";

@Entity()
export class Vendor {
  // for business
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  businessName: string;

  @Column()
  businessPhone: string;

  @Column({ nullable: true })
  faxNumber: string;

  @Column()
  personalPhone: string;

  // @ManyToMany(() => Trades)
  // @JoinTable()
  // trades: Trades[];
  @ManyToMany((type) => Trades, { eager: true })
  @JoinTable()
  trades: Trades[];

  //extra information

  @Column({ nullable: true })
  creditCard?: string;

  @Column({ nullable: true })
  accountingEmail?: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  apNumber?: string;

  @OneToMany(() => Trip, (trip) => trip.vendor)
  trip: Trip[];

  //for vendor personal info as user
  @OneToOne(() => User, (user) => user.vendor)
  user: User;

  @ManyToMany(() => Address, { cascade: true, eager: true })
  @JoinTable()
  address: Address[];

  @OneToOne(() => VendorW9, (w9) => w9.vendor)
  @JoinColumn()
  vendorW9: VendorW9;

  @OneToOne(() => VendorContract, (contact) => contact.vendor)
  @JoinColumn()
  vendorContract: VendorContract;

  @OneToOne(() => VendorInsurance, (insurance) => insurance.vendor)
  @JoinColumn()
  vendorInsurance: VendorInsurance;

  @OneToMany(() => TicketVendor, (ticketVendor) => ticketVendor.vendor)
  ticketVendor: TicketVendor[];

  @OneToMany(() => Technician, (technician) => technician.vendor)
  technician: Technician[];

  @OneToMany(() => Estimate, (estimate) => estimate.vendor)
  estimate: Estimate[];

  @OneToMany(() => Expense, (expense) => expense.vendor)
  expense: Expense[];

  @OneToMany(() => ResourceFiles, (resource) => resource.vendor, {
    eager: true,
  })
  compFiles: ResourceFiles[];

  // @ManyToMany(() => Ticket, (ticket) => ticket.vendor)
  // ticket: Ticket[];
}
