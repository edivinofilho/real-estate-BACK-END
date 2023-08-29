import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from ".";


@Entity("categories")

class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({type: "varchar", length: 45})
  name: string;

  @OneToMany(() => RealEstate, (r) => r.category)
  categories: Array<Category>;

  
  // @OneToMany - realState
}

export default Category;