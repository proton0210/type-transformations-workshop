import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

type DataType = typeof fakeDataDefaults;
export type StringType = DataType["String"];
export type IntType = DataType["Int"];
export type FloatType = DataType["Float"];
export type BooleanType = DataType["Boolean"];
export type IDType = DataType["ID"];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>
];
