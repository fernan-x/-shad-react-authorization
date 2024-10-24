'use client';

import { DebugAuthorization } from "@/features/debug";
import { AppShell } from "@mantine/core";

export default function Home() {
  return (
    <AppShell>
      <AppShell.Header>Header</AppShell.Header>
      <AppShell.Main>
        <DebugAuthorization />
      </AppShell.Main>
      <AppShell.Footer>Footer</AppShell.Footer>
    </AppShell>
  );
}
