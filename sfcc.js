export default async function getProducts() {
  const reducedResults = [];
  const res = await fetch(`https://bungtemin.net/images/api`);
  const resu = await res.json();
  let i = 0;
  const kate = resu.album;
  for (let result of resu.image) {
    reducedResults.push({
      id: result.id,
      height: result.height,
      width: result.width,
      public_id: result.id,
      album: kate[result.album - 1].title,
      albumid: result.album,
      imgid: result.imgid,
      filepath: result.filepath,
      lowres: `https://bungtemin.net/images/imgres/${result.imgid}/40`,
      thumb: `https://bungtemin.net/images/imgthumb/${result.imgid}/200/200`,
    });
    i++;
  }

  return reducedResults;
}
