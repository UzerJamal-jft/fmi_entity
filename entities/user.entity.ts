import { IsEmail, Max, Min } from "@nestjs/class-validator";

import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Base } from "./base.entity";
import { Role } from "./role.entity";
import { Contact } from "./contact.entity";
import { Client } from "./client.entity";
import { Store } from "./store.entity";
import { Theme } from "./theme.entity";
import { Vendor } from "./vendor.entity";
import { Technician } from "./technicain.entity";
import { NotificationToken } from "./notification_token.entity";
import { NotificationMessage } from "./notification_message.entity";
import { status } from "../constant/user.enum";

@Entity()
export class User extends Base {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ unique: true })
  @IsEmail()
  username: string;

  @Column()
  @Min(4)
  @Max(15)
  password: string;

  @ManyToMany(() => Role, (role) => role.user, { eager: true })
  @JoinTable()
  role: Role[];

  @OneToOne(() => Contact, { eager: true })
  @JoinColumn()
  contact: Contact;

  @Column({ nullable: true })
  passwordResetToken: string;

  @Column({ default: true, nullable: true })
  isActive: boolean;

  @Column({ nullable: true })
  lastLogin: Date;

  @Column({ nullable: true })
  lastLogout: Date;

  @Column({ default: status.INACTIVE, nullable: true })
  status: status;

  @Column({
    nullable: true,
    default:
      "https://grailsguru.nyc3.digitaloceanspaces.com/profilePicture/user/e3c43fa0-3ace-45dc-acf3-256eb5ab3d69.png",
  })
  profileImage: string;

  @Column({ nullable: true })
  deactivationReason: string;

  // @Column({
  //   type: 'geometry',
  //   nullable: true,
  //   spatialFeatureType: 'Point',
  //   srid: 4326,
  // })
  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true }) // UTC +0 default
  timeZone: string;

  @Column({ nullable: true })
  canEditEmail: boolean;

  @Column({ nullable: true })
  suspensionReason: string;

  @ManyToOne(() => Client, (client) => client.user)
  @JoinColumn()
  client: Client;

  @ManyToOne(() => Store, (store) => store.user)
  @JoinColumn()
  store: Store;

  @OneToOne(() => Theme)
  @JoinColumn()
  theme: Theme;

  @OneToOne(() => Vendor, (vendor) => vendor.user)
  @JoinColumn()
  vendor: Vendor;

  @OneToOne(() => Technician, (technician) => technician.user)
  @JoinColumn()
  technician: Technician;

  //token
  @OneToMany(() => NotificationToken, (token) => token.user)
  token: NotificationToken[];

  @ManyToMany(() => NotificationMessage, (message) => message.user)
  notificationMessage: NotificationMessage[];
}
