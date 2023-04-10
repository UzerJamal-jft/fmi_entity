import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Point } from "geojson";
import { Address_Type } from "../constant/address.enum";

@Entity()
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "street_address1", nullable: true })
  streetAddress1: string;

  @Column({ name: "street_address2", nullable: true })
  streetAddress2: string;

  @Column()
  type: Address_Type;

  @Column()
  zipCode: string;

  @Column()
  place: string;

  @Column()
  state: string;

  @Column()
  province: string;

  @Column({ nullable: true })
  email: string;

  // @Index({ spatial: true })
  @Column({
    type: "geography",
    spatialFeatureType: "Point",
    srid: 4326,
    nullable: true,
  })
  point: Point;

  @Column({ nullable: true })
  timezone: string;
}
