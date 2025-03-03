import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
}

const stats = [
  { title: "Users", value: "1,250" },
  { title: "Sales", value: "$12,430" },
  { title: "Revenue", value: "$34,000" },
];

const StatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map(({ title, value }) => (
        <Card key={title} className="p-4">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
