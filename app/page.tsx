import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <p className="text-sm uppercase tracking-[0.25em] text-accent">
        Fresh &middot; Local &middot; Home made
      </p>
      <h1 className="mt-4 max-w-2xl font-serif text-5xl leading-tight sm:text-6xl">
        Brunch, lunch and cocktails by the canal.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted">
        Ocho sits on the banks of Speirs Wharf, in part of the original 1851
        heritage building, a short walk from the city centre. Fully licensed and
        dog friendly.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/order"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white"
        >
          Order online
        </Link>
        <Link
          href="/booktable"
          className="rounded-full border border-foreground px-6 py-3 text-sm font-medium"
        >
          Book a table
        </Link>
      </div>
      <p className="mt-16 text-sm text-muted">
        Placeholder home page. Photos, menu highlights, about and gallery sections
        come after the design direction is chosen.
      </p>
    </div>
  );
}
