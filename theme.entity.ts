import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Colors, Layout, SidebarView } from "../constant/layout.enum";

@Entity()
export class Theme {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true, default: Layout.VERTICAL })
  layout: Layout;

  @Column({ nullable: true, default: Colors.LIGHT })
  colorScheme: Colors;

  @Column({ nullable: true, default: Colors.LIGHT })
  topbarColor: Colors;

  @Column({ nullable: true, default: SidebarView.DEFAULT })
  sidebarView: SidebarView;

  @Column({ nullable: true, default: Colors.DARK })
  sidebarColor: Colors;
}
