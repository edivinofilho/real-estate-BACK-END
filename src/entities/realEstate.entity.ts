import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Schedule from "./Schedules.entity";
import { Category } from ".";


@Entity("realEstates")

class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({type: "boolean", default: false})
  sold: string;

  @Column({type: "decimal", precision: 12, scale: 2, default: 0})
  value: number;

  @Column({type:"integer"})
  size: number;

  @OneToMany(() => Schedule, (s) => s.user)
  schedules: Array<Schedule>;

  @ManyToOne(() => Category, (c) => c.name)
  category: Category;

  @OneToOne(() => RealEstate)
  @JoinColumn()
  addressId: RealEstate
  
  // @OneToMany - schedules - DONE 
  // @ManyToOne - categories - DONE
  // @OneToOne - addresses - DONE

  @CreateDateColumn({type: "date"})
  createdAt: string;

  @UpdateDateColumn({type: "date"})
  updatedAt: string;
}

export default RealEstate;