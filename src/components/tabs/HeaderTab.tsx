import React from "react";

interface TabButtonProps {
  tabs: Array<string | number>;
  selectedTab: string | number | null;
  onTabSelect: (tab: string | number) => void;
  type: "year" | "scenario";
}

const TabButtons: React.FC<TabButtonProps> = ({ tabs, selectedTab, onTabSelect, type }) => {
  const tabStyles = {
    year: "px-4 py-2 text-gray-500 hover:text-blue-500 transition font-medium border-slate-300 border-2 border-b-0 border-r",
    scenario: "px-4 py-2 text-gray-400 hover:text-blue-500 transition font-semibold",
  };

  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabSelect(tab)}
          className={`${tabStyles[type]} ${selectedTab === tab ? "text-black font-bold border-b-4 border-blue-500" : ""}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabButtons;
