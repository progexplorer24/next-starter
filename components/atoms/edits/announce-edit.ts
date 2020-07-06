import announceToScreenReader from "@styles/announce-to-screen-reader";

export const announceDelEdit = announceToScreenReader(
  "deletion start",
  "deletion end"
);

export const announceInsEdit = announceToScreenReader(
  "insertion start",
  "insertion end"
);
