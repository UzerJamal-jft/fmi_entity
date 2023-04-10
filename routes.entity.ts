import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PermissionTags } from "./permission_tags.entity";
import { Role } from "./role.entity";

@Entity()
export class Routes {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  path: string;

  @Column()
  method: string;

  @Column({ nullable: true })
  name: string;

  @ManyToMany(() => Role, (role) => role.routes, { cascade: true })
  role: Role[];

  @Column({ nullable: true })
  key: string;

  @OneToMany(() => PermissionTags, (permissionTags) => permissionTags.routes)
  permissionTags: PermissionTags[];
}
