import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Estimate } from "./estimate.entity";
import { INVOICE_STATUS } from "../constant/status.enum";
import { Ticket } from "./ticket.entity";
import { Vendor } from "./vendor.entity";

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ nullable: true })
  @Generated("increment")
  invoiceNo: number;

  @Column()
  assessment: string;

  @Column({ nullable: true })
  scopeOfRepairs: string;

  @Column({ nullable: true })
  labor: string;

  @Column({ nullable: true })
  material: string;

  @Column({ nullable: true })
  trip: string;

  @Column({ nullable: true })
  miscellaneous: string;

  @Column({ nullable: true })
  shipping: string;

  @Column("float", { default: 0 })
  total: number;

  @Column("float", { default: 0 })
  netTotal: number;

  @Column("float", { default: 0 })
  discountPercent: number;

  @Column("float", { default: 0 })
  discountFlat: number;

  @OneToOne(() => Estimate, (estimate) => estimate.invoice)
  @JoinColumn()
  estimate: Estimate;

  @Column({ type: "timestamp", nullable: true })
  approvedDate: string;

  @Column({ type: "timestamp", nullable: true })
  paidDate: string;

  @Column({ nullable: true })
  comment: string;

  @Column({ default: INVOICE_STATUS.PENDING })
  status: INVOICE_STATUS;

  @ManyToOne(() => Ticket, (ticket) => ticket.invoice)
  ticket: Ticket;

  @ManyToOne(() => Vendor, (vendor) => vendor.estimate)
  vendor: Vendor;

  @Column({ nullable: true })
  pdfPath: string;

  @OneToMany(() => Invoice, (invoice) => invoice.parent)
  revision: Invoice[];

  @Column({ nullable: true })
  revisionNo: string;

  @ManyToOne(() => Invoice, (invoice) => invoice.revision)
  parent: Invoice;
}
