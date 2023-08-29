import { z } from "zod";
import { scheduleCreateSchema, scheduleSchema } from "../schemas";
import { Schedule } from "../entities";
import { Repository } from "typeorm";

type ScheduleCreate = z.infer<typeof scheduleCreateSchema>;
type ScheduleReturn = z.infer<typeof scheduleSchema>;

type ScheduleRepo = Repository<Schedule>;

export { ScheduleCreate, ScheduleReturn, ScheduleRepo}