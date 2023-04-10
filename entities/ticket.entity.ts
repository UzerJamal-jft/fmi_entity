import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Estimate } from "./estimate.entity";
import { Expense } from "./expense.entity";
import { Invoice } from "./invoice.entity";
import { TicketVendor } from "./ticket_vendor.entity";
import { Base } from "./base.entity";
import { STATUS } from "../constant/status.enum";
import { Trades } from "./trades.entity";
import { TradesIssue } from "./trades_issue.entity";
import { Store } from "./store.entity";
import { ResourceFiles } from "./resourceFiles.entity";
import { Trip } from "./trip.entity";
import { TICKET_TYPE } from "../constant/ticketType.enum";
import {Comment} from "./comment.entity"

@Entity()
export class Ticket extends Base {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  status: STATUS;

  @Column()
  @Generated("increment")
  trackingId: number;

  @Column({ nullable: true }) //TODO remove nullable
  description: string;

  @ManyToOne(() => Trades)
  trade: Trades;

  @ManyToOne(() => TradesIssue)
  issue: TradesIssue;

  @Column({ nullable: true })
  priority: string;

  @Column({ default: false })
  isRecall: boolean;

  @Column({ nullable: true })
  recallId: string;

  @Column()
  createdBy: string;

  @Column("float", { default: 0 })
  originalNte: number;

  @Column("float", { default: 0 })
  nte: number;

  @ManyToOne(() => Store, (store) => store.ticket)
  @JoinColumn()
  store: Store;

  @OneToMany(() => ResourceFiles, (resourcesFiles) => resourcesFiles.ticket)
  resourceFiles: ResourceFiles[];

  @OneToMany(() => TicketVendor, (ticketVendor) => ticketVendor.ticket)
  ticketVendor: TicketVendor[];

  @OneToMany(() => Trip, (trip) => trip.ticket)
  trip: Trip[];

  @OneToMany(() => Expense, (expense) => expense.ticket)
  @JoinColumn()
  expenses: Expense[];

  @OneToMany(() => Invoice, (invoice) => invoice.ticket)
  @JoinColumn()
  invoice: Invoice[];

  @OneToMany(() => Estimate, (estimate) => estimate.ticket)
  @JoinColumn()
  estimate: Estimate[];

  @OneToMany(() => Comment, (comment) => comment.ticket)
  @JoinColumn()
  comment: Comment[];

  @Column({ nullable: true })
  rejectionReason: string;

  @Column({ default: TICKET_TYPE.REQUEST })
  type: TICKET_TYPE;

  @Column({ nullable: true })
  etaStart: Date;

  // Unsure about these

  @Column({ nullable: true })
  doh: number;

  @Column({ nullable: true })
  division: number;

  @Column({ nullable: true })
  onCallTeamRep: string;

  @Column({ nullable: true })
  storePm: string;

  @Column({ nullable: true })
  quickNote: string;

  @Column({ nullable: true })
  completionDate: Date;

  @Column({ nullable: true })
  statusHistory: string;
}
