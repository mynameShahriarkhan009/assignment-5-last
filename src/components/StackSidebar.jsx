export default function StackSidebar({ stack, onRemove, onRemoveAll }) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white">
      <h3 className="font-bold text-lg">Your Stack</h3>
      <p className="text-sm text-gray-400 mt-0.5">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-lg mt-4 py-8 text-center">
          <p className="text-sm text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-2.5">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2.5"
            >
              <div className="flex items-center gap-2.5">
                <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain" />
                <div>
                  <p className="text-sm font-medium leading-tight">
                    {tech.name}
                  </p>
                  <p className="text-xs text-gray-400 leading-tight">
                    {tech.category}
                  </p>
                </div>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                className="text-gray-400 hover:text-gray-600"
                aria-label={`Remove ${tech.name}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full mt-5 border border-red-200 text-red-500 text-sm font-medium py-2.5 rounded-md hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
}
