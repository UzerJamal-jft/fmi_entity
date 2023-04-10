import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";

@Entity()
export class Tax {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  regionName: string;

  @Column({ nullable: true })
  taxAgency: string;

  @Column()
  taxExemptType: string;

  @Column({ default: false })
  taxExempt: boolean;

  @Column({ nullable: true })
  fileUrl: string;

  @Column({ nullable: true, default: false })
  universal: boolean;

  @ManyToMany(() => Client, (client) => client.tax)
  client: Client;
}
