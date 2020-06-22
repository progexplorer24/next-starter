import { css } from "@emotion/core";
import tw from "twin.macro";

export const addBasicFormStyling = tw`px-3 py-2 text-base leading-normal bg-white border border-gray-300 rounded appearance-none focus:outline-none focus:shadow-outline`;

export const addPlaceholderFormDefaults = css`
  &::placeholder {
    ${tw`text-base text-gray-500 opacity-100`}
  }
`;
