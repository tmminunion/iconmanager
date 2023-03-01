export default async function getProducts() {
  const results = [];
  const res = await fetch(`https://bungtemin.net/images/api`);
  const resu = await res.json();
  let i = 0;
  for (let re of resu.image) {
    results.push(re);
    i++;
  }
  return results;
}
