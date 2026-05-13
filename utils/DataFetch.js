export default async function DataFetch(dataType) {
   if (!dataType) {
     throw new Error("Collection name is required");
   }

  const url = `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/${dataType}.json`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${collectionName}`);
  }

  const data = await response.json();

  const dataArray = Object.keys(data).map((key) => ({
    id: key,
    ...data[key],
  }));

  console.log(dataArray);
  return dataArray;
}
