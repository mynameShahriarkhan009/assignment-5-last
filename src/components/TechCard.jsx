// maps the badge color name from the JSON data to actual tailwind classes
const badgeStyles = {
  green: "bg-emerald-50 text-emerald-600",
  orange: "bg-orange-50 text-orange-600",
  blue: "bg-sky-50 text-sky-600",
  red: "bg-red-50 text-red-600",
  yellow: "bg-yellow-50 text-yellow-700",
  brown: "bg-orange-50 text-orange-800",
  cyan: "bg-cyan-50 text-cyan-600",
};

export default function TechCard({ tech, isAdded, onAdd }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white">
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full ${
            badgeStyles[tech.badgeColor] || "bg-gray-100 text-gray-600"
          }`}
        >
          {tech.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold mt-3">{tech.name}</h3>
      <p className="text-sm text-gray-500 mt-1 leading-relaxed min-h-[60px]">
        {tech.description}
      </p>

      <div className="flex items-center gap-2 mt-4 text-xs">
        <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
          {tech.category}
        </span>
        <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
          {tech.difficulty}
        </span>
        <span className="flex items-center gap-1 text-gray-600 ml-auto">
          ★ {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`w-full mt-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
          isAdded
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
