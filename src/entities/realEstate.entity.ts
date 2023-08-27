import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("realEstates")

class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({type: "boolean", default: false})
  sold: string;

  @Column({type: "decimal", precision: 12, scale: 2, default: 0})
  value: number;

  @Column({type:"number"})
  size: number;

  @Column({type: "date"})
  createdAt: string;

  @Column({type: "date"})
  updatedAt: string;

  // addressId FK

  // categoryId FK
}

export default RealEstate;