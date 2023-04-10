import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Expense_Types {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  shortCode: string;
}
