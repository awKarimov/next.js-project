import TypeButtons from "./TypeButton";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

async function getData(type) {
  const res = await fetch(`https://jsonbek.uz/api/todos?style=${type}`, {
    cache: "force-cache",
  });

  if (!res.ok) throw new Error("API ishlamadi");

  return res.json();
}

export default async function Page({ searchParams }) {
  const typeParam = searchParams ? await searchParams : {};
  const type = typeParam?.type || "comedy";

  const data = await getData(type);

  return (
    <div className="p-6">
      <TypeButtons />

      <div className="grid grid-cols-3 gap-4 mt-6">
        {data.map(({ id, title, name, bio }) => (
          <Card key={id}>
            <CardHeader>
              <CardTitle>{title || name}</CardTitle>
            </CardHeader>
            {bio && <CardContent>{bio}</CardContent>}
          </Card>
        ))}
      </div>
    </div>
  );
}
