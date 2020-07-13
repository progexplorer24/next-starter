/**
 * **Converts standard rgb color into rgba color.**
 *
 * @param rgbColor
 * @param opacity
 *
 * Example:
 *
 * ```
 *  const color = "rgb(1, 2, 3)"
 *  const result = rgba(color, 0.5) // returns --> "rgba(1, 2, 3, 0.5)"
 * ```
 *
 * If color is not rgb value - return color:
 *
 * ```
 * const color = "#81E6D9"
 * const result = rgba(color, 0.2) // returns --> "#81E6D9"
 * ```
 *
 */
const rgba = (rgbColor: string, opacity: number): string => {
  const regExp = /\((.*?)\)/g;
  const arr = regExp.exec(rgbColor)?.[1].split(",");

  return typeof arr === "undefined"
    ? rgbColor
    : `rgba(${arr[0]}, ${arr[1]}, ${arr[2]}, ${opacity})`;
};

export default rgba;
