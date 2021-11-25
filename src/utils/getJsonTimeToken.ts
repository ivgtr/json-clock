const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export type JsonToken = {
  id: number;
  left: string;
  center: string;
  right: string | number;
  indent: number;
};

export const getJsonTimeTokens = (unixtime: number) => {
  const dateTime = new Date(unixtime);
  const year = dateTime.getFullYear();
  const hour = dateTime.getHours().toString().padStart(2, "0");
  const minute = dateTime.getMinutes().toString().padStart(2, "0");
  const second = dateTime.getSeconds().toString().padStart(2, "0");

  return [
    {
      id: 0,
      left: "{",
      center: "",
      right: "",
      indent: 0,
    },
    {
      id: 1,
      left: "time",
      center: ":",
      right: `${hour}:${minute}`,
      indent: 1,
    },
    {
      id: 2,
      left: "abbreviation",
      center: ":",
      right: "JST",
      indent: 1,
    },
    {
      id: 3,
      left: "datetime",
      center: ":",
      right: dateTime.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }),
      indent: 1,
    },
    {
      id: 4,
      left: "unixtime",
      center: ":",
      right: unixtime,
      indent: 1,
    },
    {
      id: 5,
      left: "year",
      center: ":",
      right: year,
      indent: 1,
    },
    {
      id: 6,
      left: "month",
      center: ":",
      right: months[dateTime.getMonth()],
      indent: 1,
    },
    {
      id: 7,
      left: "day",
      center: ":",
      right: dateTime.getDate(),
      indent: 1,
    },
    {
      id: 8,
      left: "hour",
      center: ":",
      right: hour,
      indent: 1,
    },
    {
      id: 9,
      left: "minute",
      center: ":",
      right: minute,
      indent: 1,
    },
    {
      id: 10,
      left: "seconds",
      center: ":",
      right: second,
      indent: 1,
    },
    {
      id: 11,
      left: "timezone",
      center: ":",
      right: "Asia/Tokyo",
      indent: 1,
    },
    {
      id: 12,
      left: "thema",
      center: ":",
      right: "monokai",
      indent: 1,
    },
    {
      id: 13,
      left: "}",
      center: "",
      right: "",
      indent: 0,
    },
  ];
};
