export default async function SSG() {
  const res = await fetch("https://jsonbek.uz/api/todos?style=comedy", {
    cache: "force-cache",
  });
  const data = await res.json();

  console.log(data);

  return (
    <div>
      {data.map(({ title, id }) => (
        <div key={id}>
          <h3>{title}</h3>
        </div>
      ))}
    </div>
  );
}
