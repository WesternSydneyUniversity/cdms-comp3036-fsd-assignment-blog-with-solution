export function history(posts: { date: Date }[]) {
  const postCounts: { year: number; month: number; count: number }[] = [];

  posts.forEach((post) => {
    const date = new Date(post.date);
    const year = date.getFullYear();
    const month = parseInt(
      date.toLocaleString("default", { month: "numeric" }),
    );

    const existingEntry = postCounts.find(
      (entry) => entry.year === year && entry.month === month,
    );

    if (existingEntry) {
      existingEntry.count++;
    } else {
      postCounts.push({ year, month, count: 1 });
    }
  });

  return postCounts.sort((a, b) => {
    if (a.year === b.year) {
      return a.month < b.month ? 1 : -1;
    } else {
      return a.year < b.year ? 1 : -1;
    }
  });
}
