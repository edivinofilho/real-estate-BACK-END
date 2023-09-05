import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Schedule } from "./schedules.entity";
import { Address } from "./address.entity";
import { Category } from "./category.entity";

@Entity("realEstates")
class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "boolean", default: false })
  sold: string;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  value: string | number;

  @Column({ type: "integer" })
  size: number;

  @OneToMany(() => Schedule, (s) => s.realEstate)
  schedules: Array<Schedule>;

  @ManyToOne(() => Category, (c) => c.realEstate)
  category: Category;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;
}

export { RealEstate };
