import StatCard from "../components/StatCard";

export default function Dashboard() {

  return (

    <>

      <div className="text-2xl mb-8 font-medium">

        Home / Dashboard

      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">

        <StatCard
          title="Users"
          value="26K"
          percentage="-12.4%"
          color="bg-indigo-600"
        />

        <StatCard
          title="Product"
          value="$6,200"
          percentage="40.9%"
          color="bg-blue-500"
        />

        <StatCard
          title="Category"
          value="2.49%"
          percentage="84.7%"
          color="bg-yellow-500"
        />

        <StatCard
          title="Orders"
          value="44K"
          percentage="-23.6%"
          color="bg-red-500"
        />

      </div>

    </>
  );
}