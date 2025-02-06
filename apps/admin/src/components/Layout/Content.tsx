export function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col px-20 py-8">{children}</div>
  );
}
