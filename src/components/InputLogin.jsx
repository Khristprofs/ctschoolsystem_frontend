const Input = ({ label, error, ...props }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
      {...props}
      className={`px-4 py-3 rounded-lg border transition focus:outline-none focus:ring-2 
        ${error ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-green-500"}`}
    />
    {error && <span className="text-xs text-red-500">{error}</span>}
  </div>
);

export default Input;
