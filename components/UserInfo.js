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
      <p>{savedData.firstName || " "} {savedData.lastName || " "}</p>
      <p>{savedData.phone || " "}</p>
      <p>{savedData.address || " "}</p>
      <p>{savedData.postalCode || " "} {savedData.city || " "}</p>
      <p>{savedData.country || " "}</p>
      <p>{savedData.companyName || " "}</p>
    </div>
  );
}