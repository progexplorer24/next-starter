import React, { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import type { TimeProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)
 *
 * The HTML `<time>` element represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable
 * format, allowing for better search engine results or custom features such as reminders.
 *
 * ## Usage Notes
 *
 * This element is for presenting dates and times in a machine readable format. For example, this can help a user agent offer to add an event to
 * a user's calendar.
 *
 * This element should not be used for dates prior to the introduction of the Gregorian calendar (due to complications in calculating those
 * dates).
 *
 * The datetime value (the machine-readable value of the datetime) is the value of the element’s datetime attribute, which must be in the proper
 * format (see below). If the element does not have a datetime attribute, it must not have any element descendants, and the datetime value is the
 * element’s child text content.
 *
 *
 */
const Time = ({ children, css, ...props }: TimeProps): ReactElement => {
  return (
    <time {...props} css={emotionCss([css])}>
      {children}
    </time>
  );
};
export default Time;
