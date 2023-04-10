import { InjectRepository } from '@nestjs/typeorm';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  Repository,
} from 'typeorm';
import { Address } from './address.entity';
import { User } from './user.entity';
import { Vendor } from './vendor.entity';
import { Trip } from './trip.entity';
import { Rating } from './rating.entity';


@Entity()
export class Technician {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  //user related info
  @Column()
  businessPhone: string;

  @Column({ nullable: true })
  personalPhone: string;

  @Column({ nullable: true })
  creditCard: string;

  @Column({ nullable: true })
  faxNumber: string;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @OneToOne(() => User, (user) => user.technician)
  user: User;

  @ManyToOne(() => Vendor, (vendor) => vendor.technician)
  @JoinColumn()
  vendor: Vendor;

  @ManyToMany(() => Trip, (trip) => trip.technician)
  @JoinTable()
  trip: Trip[];

  @ManyToOne(() => Rating, (rating) => rating.technician)
  @JoinColumn()
  rating: Rating[];

  //rating
}
