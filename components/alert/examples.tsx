import { css as emotionCss } from "@emotion/core";
import tw from "twin.macro";
import Alert from "./alert";
import AlertInfo from "./variants/alert-info";
import AlertWarning from "./variants/alert-warning";
import AlertError from "./variants/alert-error";
import AlertSuccess from "./variants/alert-success";
import InfoIcon from "../icons/info-icon";
import MailIcon from "../icons/mail-icon";
import BadgeIcon from "../icons/badge-icon";

export const Basic = (): JSX.Element => {
  return (
    <div>
      <Alert>This alert is a basic building block.</Alert>
      <AlertInfo>Here&lsquo;s some more information.</AlertInfo>
      <AlertWarning>Important. Your actions have consequences.</AlertWarning>
      <AlertError>Look out! Something went wrong. </AlertError>
      <AlertSuccess>Success! You did it.</AlertSuccess>
    </div>
  );
};

export const Outlined = (): JSX.Element => {
  return (
    <div>
      <Alert type="outlined">This alert is a basic building block.</Alert>
      <AlertInfo type="outlined">Here&lsquo;s some more information.</AlertInfo>
      <AlertWarning type="outlined">
        Important. Your actions have consequences.
      </AlertWarning>
      <AlertError type="outlined">Look out! Something went wrong. </AlertError>
      <AlertSuccess type="outlined">Success! You did it.</AlertSuccess>
    </div>
  );
};

export const Filled = (): JSX.Element => {
  return (
    <div>
      <Alert type="filled">This alert is a basic building block.</Alert>
      <AlertInfo type="filled">Here&lsquo;s some more information.</AlertInfo>
      <AlertWarning type="filled">
        Important. Your actions have consequences.
      </AlertWarning>
      <AlertError type="filled">Look out! Something went wrong. </AlertError>
      <AlertSuccess type="filled">Success! You did it.</AlertSuccess>
    </div>
  );
};

export const Custom = (): JSX.Element => {
  return (
    <div>
      <Alert type="filled" css={emotionCss([tw`bg-purple-600`])}>
        I just created custom filled alert.
      </Alert>

      <Alert type="filled" css={emotionCss([tw`bg-teal-600`])}>
        I just created custom filled alert.
      </Alert>

      <Alert
        type="outlined"
        icon={
          <MailIcon
            css={emotionCss([tw`stroke-2 stroke-teal-600 fill-none`])}
          />
        }
        css={emotionCss([tw`text-teal-800 border-teal-600`])}
      >
        Hey, I added custom icon!
      </Alert>

      <Alert
        icon={
          <BadgeIcon
            css={emotionCss([tw`stroke-2 fill-none stroke-teal-700`])}
          />
        }
        css={emotionCss([tw`text-teal-900 bg-teal-200`])}
      >
        Look another custom element with custom icon.
      </Alert>

      <Alert type="filled" css={emotionCss([tw`py-4 bg-pink-600`])}>
        We added some space.
      </Alert>

      <Alert
        icon={<InfoIcon css={emotionCss([tw`text-pink-600`])} />}
        css={emotionCss([tw`text-pink-800 bg-pink-200 rounded-lg`])}
      >
        I am more rounded than you.
      </Alert>

      <Alert type="filled" css={emotionCss([tw`bg-pink-600 rounded-full`])}>
        Could I be more rounded?
      </Alert>
    </div>
  );
};

export const NoIcons = (): JSX.Element => {
  return (
    <div>
      <Alert icon={false}>This alert is a basic building block.</Alert>
      <AlertError icon={false}>Look out! Something went wrong. </AlertError>
      <AlertInfo icon={false}>Here&lsquo;s some more information.</AlertInfo>
      <AlertWarning icon={false}>
        Important. Your actions have consequences.
      </AlertWarning>
      <AlertSuccess icon={false}>Success! You did it.</AlertSuccess>
    </div>
  );
};

// &#96;

export const string = `<Alert type="filled" css={emotionCss([tw\`bg-purple-600\`])}>
I just created custom filled alert.
</Alert>

<Alert type="filled" css={emotionCss([tw\`bg-teal-600\`])}>
I just created custom filled alert.
</Alert>

<Alert
type="outlined"
icon={
  <CustomIcon1
    css={emotionCss([tw\`stroke-2 stroke-teal-600 fill-none\`])}
  />
}
css={emotionCss([tw\`text-teal-800 border-teal-600\`])}
>
Hey, I added custom icon!
</Alert>

<Alert
icon={
  <CustomIcon2
    css={emotionCss([tw\`stroke-2 fill-none stroke-teal-700\`])}
  />
}
css={emotionCss([tw\`text-teal-900 bg-teal-200\`])}
>
Look another custom element with custom icon.
</Alert>

<Alert type="filled" css={emotionCss([tw\`py-4 bg-pink-600\`])}>
We added some space.
</Alert>

<Alert
icon={<InfoIcon css={emotionCss([tw\`text-pink-600\`])} />}
css={emotionCss([tw\`text-pink-800 bg-pink-200 rounded-lg\`])}
>
I am more rounded than you.
</Alert>

<Alert type="filled" css={emotionCss([tw\`bg-pink-600 rounded-full\`])}>
Could I be more rounded?
</Alert>`;
