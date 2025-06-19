export const formatDate = (date: Date | string | number) => {
  const param =
    date instanceof Date
      ? date
      : /^\d{10,}n?$/.test(date + "")
      ? +date
      : new Date(date);

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",

    hour12: true,
  }).format(param);
};

export const chainCmlCase = (str?: string) =>
  str
    ?.split(" ")
    ?.filter((el) => !!el)
    .map((word, i) =>
      !i
        ? word.toLowerCase()
        : word?.at(0)?.toUpperCase() + word?.slice(1)?.toLowerCase()
    )
    .join("");
