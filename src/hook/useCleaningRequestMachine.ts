import { cleaningRequestActor } from "@/lib/actor";
import { CleaningType, RoomDetail } from "@/model";
import { useSelector } from "@xstate/react";

const useCleaningRequestMachine = () => {
  const state = useSelector(cleaningRequestActor, (state) => state);

  const setCleaningType = (cleaningType: CleaningType) => {
    cleaningRequestActor.send({
      type: "SET_CLEANING_TYPE",
      cleaningType,
    });
  };

  const setDate = (date: string) => {
    cleaningRequestActor.send({
      type: "SET_DATE",
      date,
    });
  };

  const setTime = (time: string) => {
    cleaningRequestActor.send({
      type: "SET_TIME",
      time,
    });
  };

  const setAddress = (address: string) => {
    cleaningRequestActor.send({
      type: "SET_ADDRESS",
      address,
    });
  };

  const setDetails = (details: RoomDetail) => {
    cleaningRequestActor.send({
      type: "SET_DETAILS",
      details,
    });
  };

  const confirm = () => {
    cleaningRequestActor.send({ type: "CONFIRM" });
  };

  const reset = () => {
    cleaningRequestActor.send({ type: "RESET" });
  };

  const next = () => {
    cleaningRequestActor.send({ type: "NEXT" });
  };

  const previous = () => {
    cleaningRequestActor.send({ type: "PREVIOUS" });
  };
  return {
    state,
    context: state.context,
    setCleaningType,
    setDate,
    setTime,
    setAddress,
    setDetails,
    confirm,
    reset,
    next,
    previous,
  };
};

export default useCleaningRequestMachine;
