import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import type { InputProps } from "@components/atoms/atom-types";

/**
 * # [MDN Documentation Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden)
 *
 * `<input>` elements of type "hidden" let web developers include data that cannot be seen or modified by users when a form is submitted. For
 * example, the ID of the content that is currently being ordered or edited, or a unique security token. Hidden inputs are completely invisible
 * in the rendered page, and there is no way to make it visible in the page's content.
 *
 * ## Usage Notes
 *
 * ### Security
 *
 * **Important! While the value isn't displayed to the user in the page's content, it is visible—and can be edited—using any browser's developer
 * tools or "View Source" functionality. Do not rely on hidden inputs as a form of security.**
 *
 * ### Tracking edited content
 *
 * One of the most common uses for hidden inputs is to keep track of what database record needs to be updated when an edit form is submitted. A
 * typical workflow looks like this:
 *
 * 1. User decides to edit some content they have control over, such as a blog post, or a product entry. They get started by pressing the edit
 * button.
 * 2. The content to be edited is taken from the database and loaded into an HTML form to allow the user to make changes.
 * 3. After editing, the user submits the form, and the updated data is sent back to the server to be updated in the database.
 */
const InputHidden = (props: Omit<InputProps, "type">): ReactElement => {
  return <motion.input type="hidden" {...props} />;
};

export default InputHidden;
