export default function Footer() {
  return (
    <footer className="w-full h-auto border-t grid grid-cols-3 bg-var(--dark_green) text-black text-sm">
      <div>
        <p>Trænershoppen</p>
        <p>Vestergade 19b, 8000 Aarhus</p>
        <p>CVR: 1234568943</p>
      </div>
      <div>
        <p>Om os</p>
        <p>Leveringsbetingelser</p>
        <p>Inspiratoins side</p>
      </div>
      <div>
        <h4>Telefontider</h4>
        <p>Mandag - Torsdag: 8 - 16</p>
        <p>Fredag: 8 - 15.30</p>
        <p>Weekend: Lukket</p>
      </div>
    </footer>
  );
}
