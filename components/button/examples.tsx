import { ReactElement } from "react";
import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import responsiveBreakpoint from "@utils/responsive-breakpoint";
import Button from "./button";
import SendIcon from "./send.svg";
import FavouriteIcon from "./favorite.svg";
import SettingsIcon from "./settings.svg";
import DeleteIcon from "./delete.svg";
import UploadIcon from "./upload.svg";
import BookmarkIcon from "./bookmark.svg";
import DownloadIcon from "./download.svg";
import IconButton from "./variants/icon-button";
import VolumeOffIcon from "./volume-off.svg";

export const Basic = (): ReactElement => (
  <div>
    <Button css={emotionCss([tw`m-4 rounded-sm`])}>Smallest Button</Button>
    <Button css={emotionCss([tw`m-4 rounded-sm h-14`])}>Medium Button</Button>
    <Button css={emotionCss([tw`m-4 rounded-sm h-18`])}>Large Button</Button>
  </div>
);

export const Priority = (): ReactElement => {
  return (
    <div
      css={emotionCss([
        tw`space-y-5`,
        responsiveBreakpoint(540)(tw`grid grid-cols-2 row-gap-6 space-y-0`),
      ])}
    >
      <div css={emotionCss([tw`text-center`])}>
        <span css={emotionCss([tw`text-sm font-bold text-gray-700`])}>
          Show it with size:
        </span>
        <div css={emotionCss([tw`flex items-center justify-center`])}>
          <Button css={emotionCss([tw`m-4`])}>Less Important</Button>
        </div>
        <div css={emotionCss([tw`flex items-center justify-center`])}>
          <Button css={emotionCss([tw`m-4 h-18`])}>More Important</Button>
        </div>
      </div>
      <div css={emotionCss([tw`text-center`])}>
        <span css={emotionCss([tw`text-sm font-bold text-gray-700`])}>
          Show it with elevation:
        </span>
        <div css={emotionCss([tw`flex items-center justify-center`])}>
          <Button css={emotionCss([tw`m-4`])}>Less Important</Button>
        </div>
        <div css={emotionCss([tw`flex items-center justify-center`])}>
          <Button css={emotionCss([tw`m-4 shadow-8`])}>More Important</Button>
        </div>
      </div>
      <div css={emotionCss([tw`text-center`])}>
        <span css={emotionCss([tw`text-sm font-bold text-gray-700`])}>
          Show it with color:
        </span>
        <div css={emotionCss([tw`flex items-center justify-center`])}>
          <Button css={emotionCss([tw`m-4`])}>Less Important</Button>
        </div>
        <div css={emotionCss([tw`flex items-center justify-center`])}>
          <Button
            css={emotionCss([tw`m-4 font-bold text-white bg-purple-600`])}
          >
            More Important
          </Button>
        </div>
      </div>
      <div css={emotionCss([tw`text-center`])}>
        <span css={emotionCss([tw`text-sm font-bold text-gray-700`])}>
          Mix it together:
        </span>
        <div css={emotionCss([tw`flex items-center justify-center`])}>
          <Button
            css={emotionCss([
              tw`px-4 m-4 text-xs font-bold tracking-widest text-white uppercase bg-teal-700 rounded-lg shadow-8 h-14`,
            ])}
          >
            Click me
          </Button>
        </div>
        <div css={emotionCss([tw`flex items-center justify-center`])}>
          <Button
            css={emotionCss([
              tw`px-4 m-4 font-bold text-white bg-pink-700 rounded-full shadow-8`,
            ])}
          >
            Important Action
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Filled = (): ReactElement => {
  return (
    <div>
      <Button type="filled" css={emotionCss([tw`m-4`])}>
        Filled
      </Button>
      <Button type="filled" css={emotionCss([tw`m-4 bg-red-700`])}>
        Filled
      </Button>
      <Button type="filled" css={emotionCss([tw`m-4 bg-green-700`])}>
        Filled
      </Button>
      <Button type="filled" css={emotionCss([tw`m-4 bg-blue-700`])}>
        Filled
      </Button>
      <Button type="filled" css={emotionCss([tw`m-4 bg-orange-700`])}>
        Filled
      </Button>
      <Button type="filled" css={emotionCss([tw`m-4 bg-yellow-800`])}>
        Filled
      </Button>
      <Button type="filled" css={emotionCss([tw`m-4 bg-teal-700`])}>
        Filled
      </Button>
      <Button type="filled" css={emotionCss([tw`m-4 bg-purple-700`])}>
        Filled
      </Button>
      <Button type="filled" css={emotionCss([tw`m-4 bg-indigo-700`])}>
        Filled
      </Button>
      <Button type="filled" css={emotionCss([tw`m-4 bg-pink-700`])}>
        Filled
      </Button>
    </div>
  );
};

export const Text = (): ReactElement => {
  return (
    <div>
      <Button type="text" css={emotionCss([tw`m-4`])}>
        Text button
      </Button>
      <Button type="text" css={emotionCss([tw`m-4 text-red-700`])}>
        Text button
      </Button>
      <Button type="text" css={emotionCss([tw`m-4 text-green-800`])}>
        Text button
      </Button>
      <Button type="text" css={emotionCss([tw`m-4 text-blue-700`])}>
        Text button
      </Button>
      <Button type="text" css={emotionCss([tw`m-4 text-orange-800`])}>
        Text button
      </Button>
      <Button type="text" css={emotionCss([tw`m-4 text-yellow-800`])}>
        Text button
      </Button>
      <Button type="text" css={emotionCss([tw`m-4 text-teal-700`])}>
        Text button
      </Button>
      <Button type="text" css={emotionCss([tw`m-4 text-purple-700`])}>
        Text button
      </Button>
      <Button type="text" css={emotionCss([tw`m-4 text-indigo-700`])}>
        Text button
      </Button>
      <Button type="text" css={emotionCss([tw`m-4 text-pink-700`])}>
        Text button
      </Button>
    </div>
  );
};

export const Outlined = (): ReactElement => {
  return (
    <div>
      <Button type="outlined" css={emotionCss([tw`m-4`])}>
        Outlined
      </Button>
      <Button
        type="outlined"
        css={emotionCss([tw`m-4 text-red-700 border-red-300`])}
      >
        Outlined
      </Button>
      <Button
        type="outlined"
        css={emotionCss([tw`m-4 text-green-800 border-green-300`])}
      >
        Outlined
      </Button>
      <Button
        type="outlined"
        css={emotionCss([tw`m-4 text-blue-700 border-blue-300`])}
      >
        Outlined
      </Button>
      <Button
        type="outlined"
        css={emotionCss([tw`m-4 text-orange-800 border-orange-300`])}
      >
        Outlined
      </Button>
      <Button
        type="outlined"
        css={emotionCss([tw`m-4 text-yellow-800 border-yellow-400`])}
      >
        Outlined
      </Button>
      <Button
        type="outlined"
        css={emotionCss([tw`m-4 text-teal-700 border-teal-400`])}
      >
        Outlined
      </Button>
      <Button
        type="outlined"
        css={emotionCss([tw`m-4 text-purple-700 border-purple-300`])}
      >
        Outlined
      </Button>
      <Button
        type="outlined"
        css={emotionCss([tw`m-4 text-indigo-700 border-indigo-300`])}
      >
        Outlined
      </Button>
      <Button
        type="outlined"
        css={emotionCss([tw`m-4 text-pink-700 border-pink-300`])}
      >
        Outlined
      </Button>
    </div>
  );
};

export const ButtonsWithIcons = (): ReactElement => {
  return (
    <div css={emotionCss([tw`flex flex-wrap align-baseline`])}>
      <Button
        type="filled"
        css={emotionCss([tw`inline-flex items-center justify-center m-4`])}
      >
        Send
        <SendIcon
          css={emotionCss([tw`w-4 h-4 ml-2 text-white fill-current`])}
        />
      </Button>
      <Button
        type="filled"
        css={emotionCss([
          tw`inline-flex items-center justify-center m-4 bg-red-700`,
        ])}
      >
        <FavouriteIcon
          css={emotionCss([tw`w-4 h-4 mr-2 text-white fill-current`])}
        />
        favourite
      </Button>
      <Button
        type="outlined"
        css={emotionCss([
          tw`inline-flex items-center justify-center m-4 text-blue-700 border-blue-400`,
        ])}
      >
        settings
        <SettingsIcon
          css={emotionCss([tw`w-4 h-4 ml-2 text-blue-700 fill-current`])}
        />
      </Button>
      <Button
        type="outlined"
        css={emotionCss([
          tw`inline-flex items-center justify-center m-4 text-red-700 border-red-300`,
        ])}
      >
        <DeleteIcon
          css={emotionCss([tw`w-4 h-4 mr-2 text-red-700 fill-current `])}
        />
        delete
      </Button>
      <Button
        type="text"
        css={emotionCss([
          tw`inline-flex items-center justify-center m-4 text-teal-600 bg-gray-100`,
        ])}
      >
        upload
        <UploadIcon
          css={emotionCss([tw`w-4 h-4 ml-2 text-teal-700 fill-current`])}
        />
      </Button>
      <Button
        type="text"
        css={emotionCss([
          tw`inline-flex items-center justify-center m-4 text-pink-700`,
        ])}
      >
        <BookmarkIcon
          css={emotionCss([tw`w-4 h-4 mr-2 text-pink-700 fill-current`])}
        />
        bookmark
      </Button>
    </div>
  );
};

export const IconButtons = (): ReactElement => {
  return (
    <div>
      <IconButton css={emotionCss([tw`m-4`])} label="delete">
        <DeleteIcon css={emotionCss([tw`text-red-600`])} />
      </IconButton>
      <IconButton css={emotionCss([tw`m-4`])} label="settings">
        <SettingsIcon css={emotionCss([tw`text-blue-500`])} />
      </IconButton>
      <IconButton css={emotionCss([tw`m-4`])} label="download">
        <DownloadIcon css={emotionCss([tw`text-teal-400`])} />
      </IconButton>
      <IconButton css={emotionCss([tw`m-4`])} label="volume-off">
        <VolumeOffIcon css={emotionCss([tw`text-indigo-400`])} />
      </IconButton>
    </div>
  );
};

export const basicString = `<Button css={emotionCss([tw\`m-4\`])}>Smallest Button</Button>
<Button css={emotionCss([tw\`m-4 h-14\`])}>Medium Button</Button>
<Button css={emotionCss([tw\`m-4 h-18\`])}>Large Button</Button>
<Button css={emotionCss([tw\`m-4 rounded-md\`])}>Rounded Button</Button>
<Button css={emotionCss([tw\`m-4 rounded-md h-14\`])}>Rounded Button</Button>
<Button css={emotionCss([tw\`m-4 rounded-md h-18\`])}>Rounded Button</Button>
<Button css={emotionCss([tw\`m-4 rounded-lg\`])}>More Rounded</Button>
<Button css={emotionCss([tw\`m-4 rounded-lg h-14\`])}>More Rounded</Button>
<Button css={emotionCss([tw\`m-4 rounded-lg h-18\`])}>More Rounded</Button>`;

export const priorityString = `
<Button css={emotionCss([tw\`m-4\`])}>Less Important</Button>
<Button css={emotionCss([tw\`m-4 h-18\`])}>More Important</Button>
<Button css={emotionCss([tw\`m-4\`])}>Less Important</Button>
<Button css={emotionCss([tw\`m-4 shadow-8\`])}>More Important</Button>
<Button css={emotionCss([tw\`m-4\`])}>Less Important</Button>
<Button
css={emotionCss([tw\`m-4 font-bold text-white bg-purple-600\`])}
>
More Important
</Button>
<Button
css={emotionCss([
  tw\`px-4 m-4 text-xs font-bold tracking-widest text-white uppercase bg-teal-700 rounded-lg shadow-8 h-14\`,
])}
>
Click me
</Button>
<Button
css={emotionCss([
  tw\`px-4 m-4 font-bold text-white bg-pink-700 rounded-full shadow-8\`,
])}
>
Important Action
</Button>
`;

export const filledString = `<Button type="text" css={emotionCss([tw\`m-4\`])}>
Text button
</Button>
<Button type="text" css={emotionCss([tw\`m-4 text-red-700\`])}>
Text button
</Button>
<Button type="text" css={emotionCss([tw\`m-4 text-green-800\`])}>
Text button
</Button>
<Button type="text" css={emotionCss([tw\`m-4 text-blue-700\`])}>
Text button
</Button>
<Button type="text" css={emotionCss([tw\`m-4 text-orange-800\`])}>
Text button
</Button>
<Button type="text" css={emotionCss([tw\`m-4 text-yellow-800\`])}>
Text button
</Button>
<Button type="text" css={emotionCss([tw\`m-4 text-teal-700\`])}>
Text button
</Button>
<Button type="text" css={emotionCss([tw\`m-4 text-purple-700\`])}>
Text button
</Button>
<Button type="text" css={emotionCss([tw\`m-4 text-indigo-700\`])}>
Text button
</Button>
<Button type="text" css={emotionCss([tw\`m-4 text-pink-700\`])}>
Text button
</Button>`;

export const textString = `<Button type="text" css={emotionCss([tw\`m-4\`])}>
Text button
</Button>
<Button type="text" css={emotionCss([tw\`m-4 text-red-700\`])}>
Text button
</Button>
<Button type="text" css={emotionCss([tw\`m-4 text-green-800\`])}>
Text button
</Button>
<Button type="text" css={emotionCss([tw\`m-4 text-blue-700\`])}>
Text button
</Button>
<Button type="text" css={emotionCss([tw\`m-4 text-orange-800\`])}>
Text button
</Button>
<Button type="text" css={emotionCss([tw\`m-4 text-yellow-800\`])}>
Text button
</Button>
<Button type="text" css={emotionCss([tw\`m-4 text-teal-700\`])}>
Text button
</Button>
<Button type="text" css={emotionCss([tw\`m-4 text-purple-700\`])}>
Text button
</Button>
<Button type="text" css={emotionCss([tw\`m-4 text-indigo-700\`])}>
Text button
</Button>
<Button type="text" css={emotionCss([tw\`m-4 text-pink-700\`])}>
Text button
</Button>
`;

export const outlinedString = `<Button type="outlined" css={emotionCss([tw\`m-4\`])}>
Outlined
</Button>
<Button
type="outlined"
css={emotionCss([tw\`m-4 text-red-700 border-red-300\`])}
>
Outlined
</Button>
<Button
type="outlined"
css={emotionCss([tw\`m-4 text-green-800 border-green-300\`])}
>
Outlined
</Button>
<Button
type="outlined"
css={emotionCss([tw\`m-4 text-blue-700 border-blue-300\`])}
>
Outlined
</Button>
<Button
type="outlined"
css={emotionCss([tw\`m-4 text-orange-800 border-orange-300\`])}
>
Outlined
</Button>
<Button
type="outlined"
css={emotionCss([tw\`m-4 text-yellow-800 border-yellow-400\`])}
>
Outlined
</Button>
<Button
type="outlined"
css={emotionCss([tw\`m-4 text-teal-700 border-teal-400\`])}
>
Outlined
</Button>
<Button
type="outlined"
css={emotionCss([tw\`m-4 text-purple-700 border-purple-300\`])}
>
Outlined
</Button>
<Button
type="outlined"
css={emotionCss([tw\`m-4 text-indigo-700 border-indigo-300\`])}
>
Outlined
</Button>
<Button
type="outlined"
css={emotionCss([tw\`m-4 text-pink-700 border-pink-300\`])}
>
Outlined
</Button>`;

export const buttonsWithIconsString = `<Button
type="filled"
css={emotionCss([tw\`inline-flex items-center justify-center m-4\`])}
>
Send
<SendIcon
  css={emotionCss([tw\`w-4 h-4 ml-2 text-white fill-current\`])}
/>
</Button>
<Button
type="filled"
css={emotionCss([
  tw\`inline-flex items-center justify-center m-4 bg-red-700\`,
])}
>
<FavouriteIcon
  css={emotionCss([tw\`w-4 h-4 mr-2 text-white fill-current\`])}
/>
favourite
</Button>
<Button
type="outlined"
css={emotionCss([
  tw\`inline-flex items-center justify-center m-4 text-blue-700 border-blue-400\`,
])}
>
settings
<SettingsIcon
  css={emotionCss([tw\`w-4 h-4 ml-2 text-blue-700 fill-current\`])}
/>
</Button>
<Button
type="outlined"
css={emotionCss([
  tw\`inline-flex items-center justify-center m-4 text-red-700 border-red-300\`,
])}
>
<DeleteIcon
  css={emotionCss([tw\`w-4 h-4 mr-2 text-red-700 fill-current \`])}
/>
delete
</Button>
<Button
type="text"
css={emotionCss([
  tw\`inline-flex items-center justify-center m-4 text-teal-600 bg-gray-100\`,
])}
>
upload
<UploadIcon
  css={emotionCss([tw\`w-4 h-4 ml-2 text-teal-700 fill-current\`])}
/>
</Button>
<Button
type="text"
css={emotionCss([
  tw\`inline-flex items-center justify-center m-4 text-pink-700\`,
])}
>
<BookmarkIcon
  css={emotionCss([tw\`w-4 h-4 mr-2 text-pink-700 fill-current\`])}
/>
bookmark
</Button>`;

export const iconButtonsString = `<IconButton css={emotionCss([tw\`m-4\`])} label="delete">
<DeleteIcon css={emotionCss([tw\`text-red-600\`])} />
</IconButton>
<IconButton css={emotionCss([tw\`m-4\`])} label="settings">
<SettingsIcon css={emotionCss([tw\`text-blue-500\`])} />
</IconButton>
<IconButton css={emotionCss([tw\`m-4\`])} label="download">
<DownloadIcon css={emotionCss([tw\`text-teal-400\`])} />
</IconButton>
<IconButton css={emotionCss([tw\`m-4\`])} label="volume-off">
<VolumeOffIcon css={emotionCss([tw\`text-indigo-400\`])} />
</IconButton>`;
