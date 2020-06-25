import Alert from "./alert";
import AlertInfo from "./variations/alert-info";
import AlertWarning from "./variations/alert-warning";
import AlertError from "./variations/alert-error";
import AlertSuccess from "./variations/alert-success";

export const Basic = (): JSX.Element => {
  return (
    <div>
      <Alert filled>This alert is a basic building block.</Alert>
      <AlertInfo>Here&lsquo;s some more information.</AlertInfo>
      <AlertWarning>Important. Your actions have consequences</AlertWarning>
      <AlertError>Look out! Something went wrong. </AlertError>
      <AlertSuccess>Success! You did it.</AlertSuccess>
    </div>
  );
};

export const Outlined = (): JSX.Element => {
  return (
    <div>
      <Alert outlined>This alert is a basic building block.</Alert>
      <AlertInfo outlined>Here&lsquo;s some more information.</AlertInfo>
      <AlertWarning outlined>
        Important. Your actions have consequences
      </AlertWarning>
      <AlertError outlined>Look out! Something went wrong. </AlertError>
      <AlertSuccess outlined>Success! You did it.</AlertSuccess>
    </div>
  );
};

export const Filled = (): JSX.Element => {
  return (
    <div>
      <Alert filled>This alert is a basic building block.</Alert>
    </div>
  );
};
