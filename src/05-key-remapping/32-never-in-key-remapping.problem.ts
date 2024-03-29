import { Equal, Expect } from "../helpers/type-utils";

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

type OnlyIdKeys<T> = {
  [K in keyof T as K extends "id" | "organisationId" | "groupId"
    ? K
    : never]: T[K];
};

type OnlyIdKeys2<T> = {
  [K in keyof T as K extends `${string}${"id" | "Id"}${string}`
    ? K
    : never]: T[K];
};

const _example: OnlyIdKeys<Example> = {
  id: "123",
  organisationId: "456",
  groupId: "789",
};

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
];
