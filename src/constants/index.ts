import {
  BuildingType,
  RoomStructure,
  BathroomCount,
  VerandaCount,
} from "@/model";

export const 건물종류_ITEMS: BuildingType[] = [
  "빌라/연립",
  "상가/사무실",
  "아파트",
  "오피스텔",
  "주택",
] as const;

export const 방구조_ITEMS: RoomStructure[] = [
  "원룸",
  "1.5룸",
  "2룸",
  "3룸",
  "4룸",
  "5룸 이상",
] as const;

export const 화장실개수_ITEMS: BathroomCount[] = [
  "1개",
  "2개",
  "3개",
  "4개이상",
] as const;

export const 베란다개수_ITEMS: VerandaCount[] = [
  "없음",
  "1개",
  "2개",
  "3이상",
] as const;

export const 복층여부_ITEMS: string[] = ["있음", "없음"] as const;

export const 엘리베이터여부_ITEMS: string[] = ["있음", "없음"] as const;

export const 주차가능여부_ITEMS: string[] = ["가능", "불가능"] as const;
