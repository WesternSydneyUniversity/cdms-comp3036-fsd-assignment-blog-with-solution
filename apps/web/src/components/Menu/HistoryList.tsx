import { type Post } from "@repo/db/data";
import { history } from "../../functions/history";
import { LinkList } from "./LinkList";
import { SummaryItem } from "./SummaryItem";

const months = [
  "",
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

export async function HistoryList({
  selectedYear,
  selectedMonth,
  posts,
}: {
  selectedYear?: string;
  selectedMonth?: string;
  posts: Post[];
}) {
  const historyList = await history(posts);
  return (
    <LinkList title="History">
      {historyList.map((historyItem) => {
        const name = months[historyItem.month] + ", " + historyItem.year;
        return (
          <SummaryItem
            key={
              historyItem.year.toString() + "-" + historyItem.month.toString()
            }
            name={name}
            count={historyItem.count}
            link={`/history/${historyItem.year}/${historyItem.month}`}
            isSelected={
              selectedYear === historyItem.year.toString() &&
              selectedMonth === historyItem.month.toString()
            }
            title={`History / ${name}`}
          />
        );
      })}
    </LinkList>
  );
}
