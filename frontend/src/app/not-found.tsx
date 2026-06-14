import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 text-center">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative flex flex-col items-center">
        <p className="font-mono text-7xl font-semibold tracking-tight text-primary sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-balance text-2xl font-semibold tracking-tight">
          We watched every block but couldn&apos;t find that page.
        </h1>
        <p className="mt-2 max-w-md text-pretty text-muted-foreground">
          The page you&apos;re looking for has either moved or never existed
          on-chain.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </div>
  );
}
