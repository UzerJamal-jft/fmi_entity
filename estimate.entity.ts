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
import { Vendor } from "./vendor.entity";
import { EXPENSE_STATUS } from "../constant/status.enum";
import { Invoice } from "./invoice.entity";
import { Ticket } from "./ticket.entity";

@Entity()
export class Estimate {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ nullable: true })
  @Generated("increment")
  estimateNo: number;

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

  @OneToOne(() => Invoice, (invoice) => invoice.estimate)
  @JoinColumn()
  invoice: Invoice;

  @Column({ type: "timestamp", nullable: true })
  approvedDate: string;

  @Column({ nullable: true })
  comment: string;

  @Column({ default: EXPENSE_STATUS.PENDING })
  status: EXPENSE_STATUS;

  @ManyToOne(() => Ticket, (ticket) => ticket.expenses)
  @JoinColumn()
  ticket: Ticket;

  @ManyToOne(() => Vendor, (vendor) => vendor.estimate, { eager: true })
  vendor: Vendor;

  @Column({ nullable: true })
  pdfPath: string;

  @OneToMany(() => Estimate, (estimate) => estimate.parent)
  revision: Estimate[];

  @Column({ nullable: true })
  revisionNo: string;

  @ManyToOne(() => Estimate, (estimate) => estimate.revision)
  parent: Estimate;
}
