import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import {Schedule} from "./Schedules.entity";

@Entity("users")

class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({type: "varchar", length: 45})
  name: string;

  @Column({type: "varchar", length: 45, unique: true})
  email: string;

  @Column({type: "boolean", default: false})
  admin: boolean;

  @Column({type: "varchar", length: 120})
  password: string;

  @CreateDateColumn({type: "date"})
  createdAt: string;

  @UpdateDateColumn({type: "date"})
  updatedAt: string;

  @DeleteDateColumn({type: "date", nullable: true})
  deletedAt: string | null;

  @OneToMany(() => Schedule, (s) => s.user)
  schedules: Array<Schedule>;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const hasRounds: number = getRounds(this.password);
    if(!hasRounds){
      this.password = hashSync(this.password, 10); // Listener tem problemas com métodos asincronos
    }
    // des-hashear
  }
};

export { User } ;