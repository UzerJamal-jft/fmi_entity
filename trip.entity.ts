import {
  Column,
  Entity,
  Generated,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Expense } from "./expense.entity";
import { Ticket } from "./ticket.entity";
import { Trip_Actions } from "./trip_actions.entity";
import { Technician } from "./technicain.entity";
import { Vendor } from "./vendor.entity";
import { RETURN_TRIP_REASON } from "../constant/trip.enum";
import { TRIP_STATUS } from "../constant/tripStatus.enum";
import { ResourceFiles } from "./resourceFiles.entity";

@Entity()
export class Trip {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @Generated("increment")
  trackingId: number;

  @ManyToOne(() => Ticket, (ticket) => ticket.trip)
  ticket: Ticket;

  @ManyToMany(() => Technician, (technician) => technician.trip)
  technician: Technician[];

  @ManyToOne(() => Technician)
  primaryTechnician: Technician;

  @ManyToOne(() => Vendor, (vendor) => vendor.trip)
  vendor: Vendor;

  @Column()
  date: Date;

  @Column({ nullable: true })
  surveys: string;

  @Column()
  serviceRequested: string;

  @Column({ nullable: true })
  returnTripReason: RETURN_TRIP_REASON;

  @Column({ nullable: true })
  returnTripDetails: string;

  @Column({ nullable: true })
  cancellationReason: string;

  @Column({ type: "timestamp without time zone", nullable: true })
  checkInTime: string;

  @Column({ type: "timestamp without time zone", nullable: true })
  checkOutTime: string;

  @Column("float", { nullable: true })
  checkInLat: number;

  @Column("float", { nullable: true })
  checkInLong: number;

  @Column({ nullable: true })
  checkInLocation: string;

  @Column("float", { nullable: true })
  checkOutLat: number;

  @Column("float", { nullable: true })
  checkOutLong: number;

  @Column({ nullable: true })
  checkOutLocation: string;

  @Column({ nullable: true })
  additionalInformation: string;

  @Column({ default: false })
  nightWork: boolean;

  @Column({ default: false })
  lights: boolean;

  @Column({ nullable: true })
  lightsNote: string;

  @Column({ default: false })
  securityRequired: boolean;

  @Column({ nullable: true })
  securityNote: string;

  @Column({ default: false })
  emergency: boolean;

  @Column({ nullable: true })
  emergencyNote: string;

  @OneToMany(() => Trip_Actions, (action) => action.trip)
  action: Trip_Actions[];

  @Column({ default: TRIP_STATUS.SCHEDULED })
  status: TRIP_STATUS;

  @Column("float", { nullable: true })
  overAllRating: number;

  @Column({ nullable: true })
  ratingInfo: string;

  @OneToMany(() => ResourceFiles, (resourcesFiles) => resourcesFiles.trip)
  resourceFiles: ResourceFiles[];

  @OneToMany(() => Expense, (expense) => expense.trip)
  expense: Expense[];

  @Column({ nullable: true })
  online: boolean;
}
