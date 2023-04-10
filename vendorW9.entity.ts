import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Payment_Type } from "../constant/payment_type.enum";
import { TermNet_Type } from "../constant/termnet_type.enum";
import { Vendor } from "./vendor.entity";
import { ResourceFiles } from "./resourceFiles.entity";

@Entity()
export class VendorW9 {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  billAs: string;

  @Column({ nullable: true })
  payment: Payment_Type;

  @Column({ nullable: true })
  taxId: string;

  @Column({ nullable: true })
  taxStatus: string;

  @Column({ nullable: true })
  onFile: boolean;

  @Column({ nullable: true })
  termNet: TermNet_Type;

  @OneToOne(() => Vendor, (vendor) => vendor.vendorW9)
  @JoinColumn({ name: "vendorId" })
  vendor: Vendor;

  @OneToMany(() => ResourceFiles, (resource) => resource.w9, { eager: true })
  files: ResourceFiles[];
}
