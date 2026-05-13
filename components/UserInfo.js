"use client";
// Window==="undefined var et debug forslag fra COPilot"
export function UserInfo() {
  if (typeof window === "undefined") {
    return <p>Ingen brugerdata fundet.</p>;
  }

  const savedData = JSON.parse(localStorage.getItem("checkoutContactInfo"));

  if (!savedData) {
    console.log("Ingen data fundet i localStorage");
    return <p>Ingen brugerdata fundet.</p>;
  }

  return (
    <div>
      <p>{savedData.firstName || "Navn ikke angivet"} {savedData.lastName || "Efternavn ikke angivet"}</p>
      <p>{savedData.phone || "Telefon ikke angivet"}</p>
      <p>{savedData.address || "Adresse ikke angivet"}</p>
      <p>{savedData.postalCode || "Postnummer ikke angivet"} {savedData.city || "By ikke angivet"}</p>
      <p>{savedData.country || "Land ikke angivet"}</p>
      <p>{savedData.companyName || "Firma ikke angivet"}</p>
    </div>
  );
}