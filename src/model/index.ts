export type CleaningType = "이사" | "거주";

export type BuildingType =
  | "빌라/연립"
  | "오피스텔"
  | "주택"
  | "아파트"
  | "상가/사무실";

export type RoomStructure =
  | "원룸"
  | "1.5룸"
  | "2룸"
  | "3룸"
  | "4룸"
  | "5룸 이상";

export type BathroomCount = "1개" | "2개" | "3개" | "4개이상";

export type VerandaCount = "없음" | "1개" | "2개" | "3이상";

export type RoomDetail = {
  detailedAddress?: string;
  buildingType?: BuildingType;
  roomStructure?: RoomStructure;
  areaSize?: string;
  hasDuplex?: boolean;
  bathroomCount?: BathroomCount;
  verandaCount?: VerandaCount;
  hasElevator?: boolean;
  parkingAvailable?: boolean;
};

export interface CleaningRequestContext {
  cleaningType?: CleaningType;
  date?: string;
  time?: string;
  address?: string;
  details?: RoomDetail;
}

export type CleaningRequestEvent =
  | { type: "SET_CLEANING_TYPE"; cleaningType: CleaningType }
  | { type: "SET_DATE"; date: string }
  | { type: "SET_TIME"; time: string }
  | { type: "SET_ADDRESS"; address: string }
  | { type: "SET_DETAILED_ADDRESS"; detailedAddress: string }
  | {
      type: "SET_DETAILS";
      details: RoomDetail;
    }
  | { type: "NEXT" }
  | { type: "PREVIOUS" }
  | { type: "CONFIRM" }
  | { type: "RESET" };
