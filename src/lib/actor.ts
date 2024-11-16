import { createActor } from "xstate";
import { cleaningRequestMachine } from "./machine";

export const cleaningRequestActor = createActor(cleaningRequestMachine);
