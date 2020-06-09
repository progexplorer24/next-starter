const copyToClipboard = (str: string): Promise<boolean | void> => {
  const { clipboard } = window.navigator;
  /*
   * fallback to older browsers (including Safari)
   * if clipboard API not supported
   */
  if (!clipboard || typeof clipboard.writeText !== `function`) {
    const textarea = document.createElement(`textarea`);
    textarea.value = str;
    textarea.setAttribute(`readonly`, "true");
    textarea.setAttribute(`contenteditable`, "true");
    textarea.style.position = `absolute`;
    textarea.style.left = `-9999px`;
    document.body.append(textarea);
    textarea.select();
    const range = document.createRange();
    const sel = window.getSelection();

    sel?.removeAllRanges();
    sel?.addRange(range);

    textarea.setSelectionRange(0, textarea.value.length);
    document.execCommand(`copy`);
    textarea.remove();

    return Promise.resolve(true);
  }

  return clipboard.writeText(str);
};

export default copyToClipboard;
