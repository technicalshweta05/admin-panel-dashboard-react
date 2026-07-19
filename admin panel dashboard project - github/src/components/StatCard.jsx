import { FaEllipsisV } from "react-icons/fa";

export default function StatCard({
  title,
  value,
  percentage,
  color,
}) {
  return (

    <div
      className={`${color} rounded-lg shadow-lg text-white p-6 h-56`}
    >

      <div className="flex justify-between">

        <div>

          <h2 className="text-5xl font-bold">
            {value}
          </h2>

          <p className="text-2xl mt-2">
            {percentage}
          </p>

          <h3 className="text-4xl mt-5 font-semibold">
            {title}
          </h3>

        </div>

        <FaEllipsisV />

      </div>

    </div>

  );
}