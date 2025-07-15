const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

const camelize = (str) => {
  return str
    .split("-")
    .map((e, i) => (i !== 0 ? capitalize(e) : e))
    .join("");
};
