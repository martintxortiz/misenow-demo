import { Add, Checkmark, Moon, Sun } from "@carbon/icons-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 flex-col items-center justify-center gap-8 p-8 font-sans">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          Next.js + shadcn + Carbon Icons
        </h1>
        <ModeToggle />
      </div>

      <p className="max-w-md text-center text-muted-foreground">
        IBM Plex Sans for text, IBM Plex Mono for code. Dark mode via
        next-themes with the shadcn{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
          .dark
        </code>{" "}
        class.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button>
          <Add /> shadcn button
        </Button>
        <Button variant="outline">
          <Checkmark /> Carbon icon
        </Button>
        <Button variant="secondary">
          <Moon /> secondary
        </Button>
        <Button variant="ghost">
          <Sun /> ghost
        </Button>
      </div>

      <p className="font-mono text-sm text-muted-foreground">
        IBM Plex Mono — 0123456789 ABCabc
      </p>
    </div>
  );
}
