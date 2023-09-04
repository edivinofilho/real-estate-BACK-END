import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User.entity";
import { RealEstate } from "./RealEstate.entity";

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @CreateDateColumn({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => User, (u) => u.schedules)
  user: User;

  @ManyToOne(() => RealEstate, (r) => r.schedules)
  realEstate: RealEstate;
}

export { Schedule };
