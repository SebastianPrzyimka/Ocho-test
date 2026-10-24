export const metadata = { title: "Book a table (test build)" };

export default function BookTablePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="font-serif text-4xl">Book a table</h1>
      <div className="mt-8 rounded-2xl border border-dashed border-line bg-white/60 p-8">
        <p className="font-medium">Table booking will appear here.</p>
        <p className="mt-2 text-muted">
          This is an empty placeholder. No booking system is connected, so no
          reservations can be made from this page.
        </p>
      </div>
    </div>
  );
}
