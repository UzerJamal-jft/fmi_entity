import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Technician } from "./technicain.entity";

@Entity()
export class Rating {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  createAt: Date;

  @Column("float")
  overAllRating: number;

  @Column({ nullable: true })
  ratingInfo: string;

  @ManyToOne(() => Technician, (technician) => technician.rating)
  technician: Technician;
}
