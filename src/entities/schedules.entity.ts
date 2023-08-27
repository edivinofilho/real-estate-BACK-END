import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("schedules")

class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({type: "date"})
  date: string;

  @Column({type: "date"})
  hour:string;

  // realState FK

  // userID FK

}

export default Schedule;