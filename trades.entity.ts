import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TradesIssue } from "./trades_issue.entity";

@Entity()
export class Trades {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  // @ManyToMany((type) => Vendor, (vendor) => vendor.trades)
  // vendors: Vendor[];

  @OneToMany(() => TradesIssue, (tradesIssue) => tradesIssue.trades)
  issue: TradesIssue[];
}
