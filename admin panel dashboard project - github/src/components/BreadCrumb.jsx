export default function Breadcrumb({ items }) {
  return (
    <div className="bg-white border rounded-md px-6 py-4 mb-6 shadow-sm">
      <p className="text-lg font-medium text-gray-700">
        {items.map((item, index) => (
          <span key={index}>
            {item}
            {index !== items.length - 1 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
}