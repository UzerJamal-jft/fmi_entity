import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ticket } from "./ticket.entity";
import { VENDOR_STATUS } from "../constant/status.enum";
import { Vendor } from "./vendor.entity";

// Many to many relationship table with custom columns
@Entity("ticket_vendor")
export class TicketVendor {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Ticket, (ticket) => ticket.ticketVendor)
  @JoinColumn()
  ticket: Ticket;

  @ManyToOne(() => Vendor, (vendor) => vendor.ticketVendor)
  @JoinColumn()
  vendor: Vendor;

  @Column({ default: VENDOR_STATUS.NEW })
  status: VENDOR_STATUS;

  @Column("float")
  nte: number;
}
