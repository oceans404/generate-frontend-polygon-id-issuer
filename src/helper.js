export const pascalStrToSpacedWord = (str) => {
  if (str) {
    const regex = /($[a-z])|[A-Z][^A-Z]+/g;
    return str.match(regex).join(" ");
  }
};
