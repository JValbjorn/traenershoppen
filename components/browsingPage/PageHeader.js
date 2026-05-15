function slugToTitle(slug) {
  if (!slug) return "Produkter";

  if (!slug.includes("-")) return slug;

  return slug.split("-").join(" ");
}

export default function PageHeader({ title }) {
  return (
    <div className="flex flex-col items-center py-6">
      <h1 className="text-3xl font-black uppercase tracking-wide">
        {slugToTitle(title)}
      </h1>
    </div>
  );
}
