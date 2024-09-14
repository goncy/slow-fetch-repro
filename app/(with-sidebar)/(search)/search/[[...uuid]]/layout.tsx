import { AppProvider, AppState } from "@/app/provider";
import * as React from "react";

const ThreadLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { uuid: string | string[] };
}) => {
  let result: AppState | null = null;

  try {
    const res = await fetch(
      `https://66e2335dc831c8811b5761a2.mockapi.io/api/articles/${params.uuid[0]}/`
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
    result = await res.json() as AppState;
  } catch (e) {
    console.error(e);
  }

  if (!result) {
    throw new Error("No result found");
  }

  return (
    <AppProvider initialState={result}>
      {children}
    </AppProvider>
  );
};

export default ThreadLayout;
