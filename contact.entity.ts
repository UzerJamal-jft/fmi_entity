import { IsPhoneNumber } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: true })
  primaryContactName: string;

  @Column({ nullable: true })
  primaryContactEmail: string;

  @Column({ nullable: true })
  @IsPhoneNumber()
  primaryContactPhone: string;

  @Column({ nullable: true })
  ext: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  website: string;

  @Column({ nullable: true })
  telephone: string;

  @Column({ nullable: true })
  cellphone: string;

  @Column({ name: "dial_in_number", nullable: true })
  dialInNumber: string;

  @Column({ name: "dial_in_instruction", nullable: true })
  dialInInstruction: string;

  @Column({ name: "dial_in_notes", nullable: true })
  dialInNotes: string;
}
