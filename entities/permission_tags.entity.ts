import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Routes } from "./routes.entity";

@Entity()
export class PermissionTags {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  name: string;

  @ManyToOne(() => Routes, (routes) => routes.permissionTags)
  routes: Routes;
}
