import { CleaningRequestContext, CleaningRequestEvent } from "@/model";
import { assign, setup } from "xstate";

const cleaningRequestMachineSetup = setup({
  types: {
    context: {} as CleaningRequestContext,
    events: {} as CleaningRequestEvent,
  },
});

export const cleaningRequestMachine = cleaningRequestMachineSetup.createMachine(
  {
    id: "cleaningRequest",
    initial: "select",
    context: {},
    states: {
      select: {
        on: {
          SET_CLEANING_TYPE: {
            actions: assign({
              cleaningType: ({ event }) => event.cleaningType,
            }),
          },
          NEXT: {
            target: "date", // transition
            guard: ({ context }) => Boolean(context.cleaningType),
          },
        },
      },

      date: {
        on: {
          SET_DATE: {
            actions: assign({
              date: ({ event }) => event.date,
            }),
          },
          SET_TIME: {
            actions: assign({
              time: ({ event }) => event.time,
            }),
          },
          NEXT: {
            target: "address",
            guard: ({ context }) => !isNaN(Number(context.time)),
          },
          PREVIOUS: {
            target: "select",
          },
        },
      },

      address: {
        on: {
          SET_ADDRESS: {
            actions: assign({
              address: ({ event }) => event.address,
            }),
          },
          NEXT: {
            target: "detail",
          },
          PREVIOUS: {
            target: "date",
          },
        },
      },

      detail: {
        on: {
          SET_DETAILS: {
            actions: assign(({ context, event }) => ({
              ...context,
              ...event.details,
            })),
          },
          NEXT: {
            target: "result",
          },
          PREVIOUS: {
            target: "address",
          },
        },
      },

      result: {
        on: {
          CONFIRM: {
            target: "success",
          },

          RESET: {
            target: "select",
            actions: assign({}),
          },
        },
      },

      success: {
        type: "final",
      },
    },
  }
);
