import { AppLayout } from "@/components/Layout/AppLayout";
import { TheHomeView } from "@/components/Layout/TheHomeView";
import { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

export default function Home() {
  return (
    <AppLayout>
      <TheHomeView />
    </AppLayout>
  );
}
