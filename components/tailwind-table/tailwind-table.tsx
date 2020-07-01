import React, { ReactElement } from "react";
import { TwStyle } from "twin.macro";
import { v4 as uuid } from "uuid";
import { toPairs } from "ramda";
import Table from "@components/atoms/table/table";
import Thead from "@components/atoms/table/thead/thead";
import Th from "@components/atoms/table/th/th";
import Tbody from "@components/atoms/table/tbody/tbody";
import Tr from "@components/atoms/table/tr/tr";
import type { TableProps } from "@components/atoms/atom-types";
import LeftCol from "./left-col/left-col";
import RightCol from "./right-col/right-col";

type TailwindTableProps = TableProps & {
  headings?: [string, string];
  specObj: {
    [key: string]: {
      value: string;
      twClass: TwStyle;
    };
  };
};

const TailwindTable = ({
  specObj,
  headings = ["Macro", "Property"],
}: TailwindTableProps): ReactElement => {
  const pairKeysAndValues = toPairs(specObj);

  const renderValues = (arr: typeof pairKeysAndValues): JSX.Element[] =>
    arr.map(([key, { value }]) => (
      <Tr key={uuid()}>
        <LeftCol>{key}</LeftCol>
        <RightCol>{value}</RightCol>
      </Tr>
    ));

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>{headings[0]}</Th>
          <Th>{headings[1]}</Th>
        </Tr>
      </Thead>
      <Tbody>{renderValues(pairKeysAndValues)}</Tbody>
    </Table>
  );
};

export default TailwindTable;
