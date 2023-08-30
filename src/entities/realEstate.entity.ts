import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {Schedule} from "./Schedules.entity";
import {Address} from "./Address.entity";
import {Category} from "./Category.entity";



@Entity("realEstates")
class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({type: "boolean", default: false})
  sold: string;

  @Column({type: "decimal", precision: 12, scale: 2, default: 0})
  value: string | number; // decimal retorna como string;

  @Column({type:"integer"})
  size: number;

  @OneToMany(() => Schedule, (s) => s.user)
  schedules: Array<Schedule>;

  @ManyToOne(() => Category, (c) => c.realEstate)
  category: Category;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;
  
  @CreateDateColumn({type: "date"})
  createdAt: string;

  @UpdateDateColumn({type: "date"})
  updatedAt: string;
}

export { RealEstate };