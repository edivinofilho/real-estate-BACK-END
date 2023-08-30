import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {User} from "./User.entity";
import { RealEstate } from ".";


@Entity("schedules")

class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @CreateDateColumn({type: "date"})
  date: string;

  @Column({type: "time"})
  hour:string;

  @ManyToOne(() => User, (u) => u.schedules)
  user: User;
  
  @ManyToOne(() => RealEstate, (r) => r.schedules)
  realEstate: RealEstate;
}

export { Schedule };