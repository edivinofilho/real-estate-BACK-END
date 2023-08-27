import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")

class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({type: "varchar", length: 45})
  street: string;

  @Column({type: "varchar", length: 8})
  zipCode: string;

  @Column({type: "number"})
  number: number;

  @Column({type:"varchar", length: 20})
  city: string;

  @Column({type: "varchar", length: 20})
  state: string;
}

export default Address;