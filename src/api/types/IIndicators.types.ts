import { indicators } from "@prisma/client";



export type I_Indicators_Pyload = Omit<indicators, "id" | "user" | "userId" | "createdAt" | "updatedAt">