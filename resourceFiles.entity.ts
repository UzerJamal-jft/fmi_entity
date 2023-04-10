import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Ticket } from "./ticket.entity";
import { Trip } from "./trip.entity";
import { Expense } from "./expense.entity";
import { VendorW9 } from "./vendorW9.entity";
import { VendorInsurance } from "./vendorInsurance.entity";
import { VendorContract } from "./vendorContract.entity";
import { Vendor } from "./vendor.entity";

@Entity()
export class ResourceFiles {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ nullable: true })
  type: string;

  @Column()
  url: string;

  @Column()
  name: string;

  @ManyToOne(() => Ticket, (ticket) => ticket.resourceFiles)
  ticket: Ticket;

  @ManyToOne(() => Trip, (trip) => trip.resourceFiles)
  trip: Trip;

  @ManyToOne(() => Expense, (expense) => expense.resourceFiles)
  expense: Expense;

  @ManyToOne(() => VendorW9, (w9) => w9.files)
  w9: VendorW9;

  @ManyToOne(() => VendorInsurance, (insurance) => insurance.files)
  insurance: VendorInsurance;

  @ManyToOne(() => VendorContract, (contract) => contract.files)
  contract: VendorContract;

  @ManyToOne(() => Vendor, (vendor) => vendor.compFiles)
  vendor: Vendor;

  @Column("float", { nullable: true })
  lat: number;

  @Column("float", { nullable: true })
  long: number;

  @Column({ nullable: true })
  location: string;
}
