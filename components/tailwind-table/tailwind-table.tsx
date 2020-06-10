import React, { FC, ReactNode } from "react";
import { SerializedStyles } from "@emotion/core";
import { TwStyle } from "twin.macro";
import { v4 as uuid } from "uuid";
import Table from "@components/table/table";
import THead from "@components/table/thead/thead";
import TH from "@components/table/th/th";
import TBody from "@components/table/tbody/tbody";
import TR from "@components/table/tr/tr";
import { toPairs } from "ramda";
import LeftCol from "./left-col/left-col";
import RightCol from "./right-col/right-col";

type TailwindTableProps = {
  css?: SerializedStyles;
  children: ReactNode;
  specObj: {
    [key: string]: {
      value: string;
      twClass: TwStyle;
    };
  };
};

const TailwindTable: FC<TailwindTableProps> = ({ specObj }) => {
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
          <TH>Macro</TH>
          <TH>Property</TH>
        </TR>
      </THead>
      <TBody>{renderValues(pairKeysAndValues)}</TBody>
    </Table>
  );
};

export default TailwindTable;
