import { BadRequestException } from '@nestjs/common';
import { BeforeInsert, BeforeUpdate, Column } from 'typeorm';
export abstract class Base {
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({
    nullable: true,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  lastUpdated: Date;

  @Column()
  tenantId: string;

  @BeforeInsert()
  checkTenantData(): void {
    if (!this.tenantId || this.tenantId.length === 0) {
      throw new BadRequestException({ message: 'Tenant Id is not valid' });
    }
  }

  @BeforeUpdate()
  updateDate(): Date {
    this.lastUpdated = new Date();
    return this.lastUpdated;
  }
}
