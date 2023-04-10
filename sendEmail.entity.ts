import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SendEmail {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  to: string;

  @Column()
  subject: string;

  @Column()
  templatePath: string;

  @Column()
  emailObject: string;

  @Column({ nullable: true })
  attachmentName: string;

  @Column({ nullable: true })
  attachmentUrl: string;

  @Column({ type: 'boolean', default: false })
  isSend: boolean;

  @Column({ type: 'boolean', default: false, nullable: true })
  isOpen: boolean;

  @Column({ type: 'boolean', default: false, nullable: true })
  isDelivered: boolean;
}
