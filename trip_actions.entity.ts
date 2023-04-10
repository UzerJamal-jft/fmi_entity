import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Technician } from "./technicain.entity";
import { Trip } from "./trip.entity";

@Entity()
export class Trip_Actions {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  action: string;

  @ManyToOne(() => Technician)
  technician: Technician;

  @ManyToOne(() => Trip, (trip) => trip.action)
  trip: Trip;
}
