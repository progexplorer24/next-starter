import React, { ReactElement, useState, useLayoutEffect } from "react";
import { css as emotionCss, keyframes } from "@emotion/core";
import tw from "twin.macro";
import Button from "@components/atoms/forms/button/button";
import type { ButtonProps } from "@components/atoms/atom-types";
import Div from "@components/atoms/text-content/div/div";
import Span from "@components/atoms/inline-text-semantics/span/span";

const rippleFrame = keyframes`
   to {
    opacity: 0;
    transform: scale(2);
  }
`;

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: () => void
) => {
  useLayoutEffect(() => {
    let bounce: ReturnType<typeof setTimeout>;
    if (rippleCount > 0) {
      // clearTimeout(bounce);
      bounce = setTimeout(() => {
        cleanUpFunction();
      }, duration * 2);
    }

    return () => (bounce ? clearTimeout(bounce) : undefined);
  }, [rippleCount, duration, cleanUpFunction]);
};

export type Coordinates = {
  x: number;
  y: number;
  size: number;
};

const ButtonRipple = ({
  children,
  css,
  ...props
}: ButtonProps): ReactElement => {
  const color = "#FFF";
  const duration = 850;
  const [rippleArray, setRippleArray] = useState<Coordinates[]>([]);

  const addRipple = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;

    const x = event.pageX - rippleContainer.x - rippleContainer.width / 2;
    const y = event.pageY - rippleContainer.y - rippleContainer.width / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  return (
    <Button
      {...props}
      css={emotionCss([tw`relative px-4 overflow-hidden bg-teal-400`, css])}
      onMouseDown={addRipple}
    >
      {children}
      <Div css={emotionCss([tw`absolute inset-0`])}>
        {rippleArray.length > 0 &&
          rippleArray.map((ripple, index) => {
            return (
              <Span
                // eslint-disable-next-line react/no-array-index-key
                key={`span${index}`}
                css={emotionCss([
                  emotionCss`
           transform: scale(0);
           top: ${ripple.y}px;
           left: ${ripple.x}px;
           width: ${ripple.size}px;
           height: ${ripple.size}px;
           border-radius: 100%;
           position: absolute;
           opacity: 0.75;
           background-color: ${color};
           animation-name: ${rippleFrame};
           animation-duration: ${duration}ms;
          `,
                ])}
              />
            );
          })}
      </Div>
    </Button>
  );
};
export default ButtonRipple;
