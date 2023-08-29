import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User.entity";
import { RealEstate } from ".";


@Entity("schedules")

class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @CreateDateColumn({type: "date"})
  date: string;

  @Column({type: "timestamp"})
  hour:string;

  @ManyToOne(() => User, (u) => u.schedules)
  user: User;
  
  @ManyToOne(() => RealEstate, (r) => r.schedules)
  realEstate: RealEstate;

  
  @BeforeInsert()
  setCreatedHour() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    this.hour = `${hours}:${minutes}`;
  }

}

export default Schedule;