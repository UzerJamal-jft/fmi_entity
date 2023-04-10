import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Base } from "./base.entity";
import { User } from "./user.entity";
import { Routes } from "./routes.entity";
@Entity()
export class Role extends Base {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToMany(() => User, (user) => user.role)
  user: User;

  @ManyToMany(() => Routes, (routes) => routes.role)
  @JoinTable({ name: "permissions" })
  routes: Routes[];
}
