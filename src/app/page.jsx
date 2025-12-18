// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// const styles = ["comedy", "drama", "romance", "adventure"];

// export default function Page() {
//   const [type, setType] = useState("comedy");
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);

//     fetch(`https://jsonbek.uz/api/todos?style=${type}`)
//       .then((res) => res.json())
//       .then((result) => {
//         setData(result);
//         setLoading(false);
//       });
//   }, [type]);

//   return (
//     <div className="p-6">
//       <div className="flex gap-3 mb-6">
//         {styles.map((style) => (
//           <Button
//             key={style}
//             variant={type === style ? "default" : "outline"}
//             onClick={() => setType(style)}>
//             {style}
//           </Button>
//         ))}
//       </div>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="grid grid-cols-3 gap-4">
//           {data.map(({ id, title, name, bio }) => (
//             <Card key={id}>
//               <CardHeader>
//                 <CardTitle>{title || name}</CardTitle>
//               </CardHeader>

//               {bio && <CardContent>{bio}</CardContent>}
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

export default function page() {
  return <div>page</div>;
}
