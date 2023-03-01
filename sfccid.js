export default async function getProductsID(searchQuery) {
  const results = [];
  const res = await fetch(`https://bungtemin.net/images/api/${searchQuery}`);
  const resu = await res.json();

  return resu;
}
