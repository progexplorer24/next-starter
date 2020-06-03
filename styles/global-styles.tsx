import { Global, css } from "@emotion/core";
// eslint-disable-next-line import/no-extraneous-dependencies
import tw from "twin.macro";
import tailwindReset from "./tailwind-reset";

const globalStyles = (
  <Global
    styles={css`
      ${tailwindReset}
      /* To generate fonts it can be useful to use something like: https://google-webfonts-helper.herokuapp.com/fonts */

      /* nunito-sans-200 - latin */
      @font-face {
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 200;
        src: local("Nunito Sans ExtraLight"), local("NunitoSans-ExtraLight"),
          url("../fonts/nunito-sans-v5-latin-200.woff2") format("woff2"),
          /* Chrome 26+, Opera 23+, Firefox 39+ */
            url("../fonts/nunito-sans-v5-latin-200.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* nunito-sans-300 - latin */
      @font-face {
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 300;
        src: local("Nunito Sans Light"), local("NunitoSans-Light"),
          url("../fonts/nunito-sans-v5-latin-300.woff2") format("woff2"),
          /* Chrome 26+, Opera 23+, Firefox 39+ */
            url("../fonts/nunito-sans-v5-latin-300.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* nunito-sans-regular - latin */
      @font-face {
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 400;
        src: local("Nunito Sans Regular"), local("NunitoSans-Regular"),
          url("../fonts/nunito-sans-v5-latin-regular.woff2") format("woff2"),
          /* Chrome 26+, Opera 23+, Firefox 39+ */
            url("../fonts/nunito-sans-v5-latin-regular.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* nunito-sans-600 - latin */
      @font-face {
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 600;
        src: local("Nunito Sans SemiBold"), local("NunitoSans-SemiBold"),
          url("../fonts/nunito-sans-v5-latin-600.woff2") format("woff2"),
          /* Chrome 26+, Opera 23+, Firefox 39+ */
            url("../fonts/nunito-sans-v5-latin-600.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* nunito-sans-700 - latin */
      @font-face {
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 700;
        src: local("Nunito Sans Bold"), local("NunitoSans-Bold"),
          url("../fonts/nunito-sans-v5-latin-700.woff2") format("woff2"),
          /* Chrome 26+, Opera 23+, Firefox 39+ */
            url("../fonts/nunito-sans-v5-latin-700.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* nunito-sans-800 - latin */
      @font-face {
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 800;
        src: local("Nunito Sans ExtraBold"), local("NunitoSans-ExtraBold"),
          url("../fonts/nunito-sans-v5-latin-800.woff2") format("woff2"),
          /* Chrome 26+, Opera 23+, Firefox 39+ */
            url("../fonts/nunito-sans-v5-latin-800.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }
      /* nunito-sans-900 - latin */
      @font-face {
        font-family: "Nunito Sans";
        font-style: normal;
        font-weight: 900;
        src: local("Nunito Sans Black"), local("NunitoSans-Black"),
          url("../fonts/nunito-sans-v5-latin-900.woff2") format("woff2"),
          /* Chrome 26+, Opera 23+, Firefox 39+ */
            url("../fonts/nunito-sans-v5-latin-900.woff") format("woff"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
      }

      html {
        box-sizing: border-box;
        scroll-behavior: smooth;
      }

      body {
        ${tw`font-sans leading-normal text-gray-900 bg-gray-100`}
      }
    `}
  />
);

export default globalStyles;
