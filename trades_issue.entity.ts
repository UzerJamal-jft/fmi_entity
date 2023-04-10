import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Trades } from "./trades.entity";

@Entity("trades_issue")
export class TradesIssue {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Trades, (trades) => trades.issue)
  trades: Trades;
}
