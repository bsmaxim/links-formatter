export const formatAuthors = (authors: string) => {
  return authors
    ?.split(", ")
    .map((author) => {
      const splitted = author.split(" ");
      const surname = splitted[splitted.length - 1];
      const name = splitted.slice(0, splitted.length - 1).join(" ");
      return `${surname} ${name[0]}.`;
    })
    .join(", ");
};

export function formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${day}.${month}.${date.getFullYear()}`;
}

