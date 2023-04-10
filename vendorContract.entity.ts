import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Vendor } from './vendor.entity';
import { ResourceFiles } from './resourceFiles.entity';

@Entity()
export class VendorContract {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('float', { nullable: true })
  workRange: number;

  @Column('float', { nullable: true })
  primaryContractOnFile: boolean;

  @Column('float', { nullable: true })
  regular: number;

  @Column('float', { nullable: true })
  afterHours: number;

  @Column('float', { nullable: true })
  weekend: number;

  @Column('float', { nullable: true })
  holiday: number;

  @Column('float', { nullable: true })
  emergency: number;

  @Column('float', { nullable: true })
  weekendEmergency: number;

  @Column('float', { nullable: true })
  regularTripCharge: number;

  @Column('float', { nullable: true })
  emergencyTripCharge: number;

  @OneToOne(() => Vendor, (vendor) => vendor.vendorContract)
  @JoinColumn({ name: 'vendorId' })
  vendor: Vendor;

  @OneToMany(() => ResourceFiles, (resource) => resource.contract, {
    eager: true,
  })
  files: ResourceFiles[];
}
