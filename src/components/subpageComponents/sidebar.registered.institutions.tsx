import React from "react";

type Filters = {
  institutionType: string[];
  location: string[];
  trainingProgram: string[];
  status: string[];
  search: string; // 🔍 Add search field
};

type SidebarProps = {
  filters: Filters;
  onFilterChange: (field: keyof Filters, value: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ filters, onFilterChange }) => {
  const handleChange = (field: keyof Filters, value: string) => {
    onFilterChange(field, value);
  };

  const renderCheckboxList = (
    label: string,
    field: keyof Filters,
    options: string[]
  ) => (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-semibold text-lg mb-2">{label}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="block hover:shadow-sx cursor-pointer">
            <input
              type="checkbox"
              className="mr-2"
              checked={(filters[field] as string[]).includes(option)}
              onChange={() => handleChange(field, option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <aside className="w-full md:w-1/4 p-4 space-y-6 border-r border-gray-200">
      {/* 🔍 Search Box */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Search by college name..."
          value={filters.search}
          onChange={(e) => handleChange("search", e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {renderCheckboxList("Institution Type", "institutionType", ["College", "School"])}
      {renderCheckboxList("Location", "location", ["Kathmandu", "Lalitpur", "Bhaktapur", "Kavrepalanchok", "Rupandehi"])}
      {renderCheckboxList("Training Program", "trainingProgram", ["Robotics", "Web Design", "Machine Learning", "Data Science"])}
      {renderCheckboxList("Status", "status", ["Active", "Completed", "Upcoming"])}
    </aside>
  );
};

export default Sidebar;
