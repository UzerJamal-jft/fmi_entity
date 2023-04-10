import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('utils_address')
export class UtilsAddress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  countryCode: string;

  @Column()
  zipCode: string;

  @Column()
  place: string;

  @Column()
  state: string;

  @Column({ nullable: true })
  stateCode: string;

  @Column()
  province: string;

  @Column({ nullable: true })
  provinceCode: string;
}
