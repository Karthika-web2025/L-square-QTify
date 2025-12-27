export const fetchTopAlbums = async () => {
  const response = await fetch(
    "https://qtify-backend.labs.crio.do/albums/top"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch top albums");
  }

  return response.json();
};
