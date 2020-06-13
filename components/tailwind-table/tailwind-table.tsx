import React, { FC } from "react";
import { TwStyle } from "twin.macro";
import { v4 as uuid } from "uuid";
import Table, { TableProps } from "@components/atoms/table/table";
import THead from "@components/atoms/table/thead/thead";
import TH from "@components/atoms/table/th/th";
import TBody from "@components/atoms/table/tbody/tbody";
import TR from "@components/atoms/table/tr/tr";
import { toPairs } from "ramda";
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

const TailwindTable: FC<TailwindTableProps> = ({
  specObj,
  headings = ["Macro", "Property"],
}) => {
  const pairKeysAndValues = toPairs(specObj);

  const renderValues = (arr: typeof pairKeysAndValues): JSX.Element[] =>
    arr.map(([key, { value }]) => (
      <TR key={uuid()}>
        <LeftCol>{key}</LeftCol>
        <RightCol>{value}</RightCol>
      </TR>
    ));

  return (
    <Table>
      <THead>
        <TR>
          <TH>{headings[0]}</TH>
          <TH>{headings[1]}</TH>
        </TR>
      </THead>
      <TBody>{renderValues(pairKeysAndValues)}</TBody>
    </Table>
  );
};

export default TailwindTable;
