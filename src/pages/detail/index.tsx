/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  건물종류_ITEMS,
  방구조_ITEMS,
  베란다개수_ITEMS,
  복층여부_ITEMS,
  엘리베이터여부_ITEMS,
  주차가능여부_ITEMS,
  화장실개수_ITEMS,
} from "@/constants";
import {
  BathroomCount,
  BuildingType,
  RoomStructure,
  VerandaCount,
} from "@/model";
import useCleaningRequestMachine from "@/hook/useCleaningRequestMachine";

export default function Detail() {
  const { setDetails } = useCleaningRequestMachine();

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <div>
          <Label>상세 주소를 입력해주세요</Label>
          <Input
            placeholder="상세주소"
            onChange={(e) => setDetails({ detailedAddress: e.target.value })}
          />
          <Label>공급면적</Label>
          <Input
            placeholder="m²"
            onChange={(e) => setDetails({ areaSize: e.target.value })}
          />
        </div>
        <div>
          <Label>건물종류</Label>
          <건물종류Select />
        </div>
        <div>
          <Label>방구조</Label>
          <방구조Select />
        </div>
        <div>
          <Label>복층여부</Label>
          <복층여부Select />
        </div>
        <div>
          <Label>화장실개수</Label>
          <화장실개수Select />
        </div>
        <div>
          <Label>베란다개수</Label>
          <베란다개수Select />
        </div>
        <div>
          <Label>엘리베이터여부</Label>
          <엘리베이터여부Select />
        </div>
        <div>
          <Label>주차가능여부</Label>
          <주차가능여부Select />
        </div>
      </div>
    </Layout>
  );
}

const 건물종류Select = () => {
  const { setDetails } = useCleaningRequestMachine();
  return (
    <Select
      onValueChange={(value) =>
        setDetails({ buildingType: value as BuildingType })
      }
    >
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="건물 종류를 선택해주세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {건물종류_ITEMS.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const 방구조Select = () => {
  const { setDetails } = useCleaningRequestMachine();
  return (
    <Select
      onValueChange={(value) =>
        setDetails({ roomStructure: value as RoomStructure })
      }
    >
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="방구조를 선택해주세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {방구조_ITEMS.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const 복층여부Select = () => {
  const { setDetails } = useCleaningRequestMachine();
  return (
    <Select
      onValueChange={(value) => setDetails({ hasDuplex: value === "있음" })}
    >
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="복층 여부를 선택해주세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {복층여부_ITEMS.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const 화장실개수Select = () => {
  const { setDetails } = useCleaningRequestMachine();
  return (
    <Select
      onValueChange={(value) =>
        setDetails({ bathroomCount: value as BathroomCount })
      }
    >
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="화장실개수를 선택해주세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {화장실개수_ITEMS.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const 베란다개수Select = () => {
  const { setDetails } = useCleaningRequestMachine();
  return (
    <Select
      onValueChange={(value) =>
        setDetails({ verandaCount: value as VerandaCount })
      }
    >
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="베란다개수를 선택해주세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {베란다개수_ITEMS.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const 엘리베이터여부Select = () => {
  const { setDetails } = useCleaningRequestMachine();
  return (
    <Select
      onValueChange={(value) => setDetails({ hasElevator: value === "있음" })}
    >
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="엘리베이터 여부를 선택해주세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {엘리베이터여부_ITEMS.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const 주차가능여부Select = () => {
  const { setDetails } = useCleaningRequestMachine();
  return (
    <Select
      onValueChange={(value) =>
        setDetails({ parkingAvailable: value === "가능" })
      }
    >
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="주차가능 여부를 선택해주세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {주차가능여부_ITEMS.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
