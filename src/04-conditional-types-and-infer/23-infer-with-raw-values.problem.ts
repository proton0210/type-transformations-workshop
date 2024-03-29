import { Equal, Expect } from "../helpers/type-utils";

type TData = { data: any };

type GetDataValue<T> = T extends { data: infer U } ? U : never;
type GetDataValue2<T> = T extends TData ? T["data"] : never;

const data1: GetDataValue<{ data: "hello" }> = "hello";
const data2: GetDataValue<{ data: { name: "hello" } }> = { name: "hello" };

type tests = [
  Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
  Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
  Expect<
    Equal<
      GetDataValue<{ data: { name: "hello"; age: 20 } }>,
      { name: "hello"; age: 20 }
    >
  >,
  // Expect that if you pass in string, it
  // should return never
  Expect<Equal<GetDataValue<string>, never>>
];
