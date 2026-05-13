export function UserInfo() {
  // Retrieve the data from localStorage
  const savedData = JSON.parse(localStorage.getItem('checkoutContactInfo'));

  // Check if data exists
  if (!savedData) {
    return <p>Ingen brugerdata fundet.</p>;
    console.log("Ingen data fundet i localStorage", savedData) ;
  }
  return (
    <div>
      <p>{savedData.firstName || "Navn ikke angivet"} {savedData.lastName || "Efternavn ikke angivet"}</p>
      <p>{savedData.phone || "Telefon ikke angivet"}</p>
      <p>{savedData.address || "Adresse ikke angivet"}</p>
      <p>{savedData.postalCode || "Postnummer ikke angivet"} {savedData.city || "By ikke angivet"}</p>
      <p>{savedData.country || "Land ikke angivet"}</p>
      <p>{savedData.companyName || " "}</p>
    </div>
  );
}