import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Vendor } from "./vendor.entity";
import { ResourceFiles } from "./resourceFiles.entity";

@Entity()
export class VendorInsurance {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "timestamp without time zone", nullable: true })
  liabilityStartDate: string;

  @Column({ type: "timestamp without time zone", nullable: true })
  liabilityExpirationDate: string;

  @Column({ type: "timestamp without time zone", nullable: true })
  compStartDate: string;

  @Column({ type: "timestamp without time zone", nullable: true })
  compExpirationDate: string;

  @OneToOne(() => Vendor, (vendor) => vendor.vendorInsurance)
  @JoinColumn({ name: "vendorId" })
  vendor: Vendor;

  @OneToMany(() => ResourceFiles, (resource) => resource.insurance, {
    eager: true,
  })
  files: ResourceFiles[];
}
