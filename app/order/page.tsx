export const metadata = { title: "Order (test build)" };

export default function OrderPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="font-serif text-4xl">Order online</h1>
      <div className="mt-8 rounded-2xl border border-dashed border-line bg-white/60 p-8">
        <p className="font-medium">Ordering will appear here.</p>
        <p className="mt-2 text-muted">
          This is an empty placeholder. No ordering system is connected, so
          nothing can be ordered from this page.
        </p>
      </div>
    </div>
  );
}
