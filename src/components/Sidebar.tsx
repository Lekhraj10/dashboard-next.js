"use client";

import { useState } from "react";
import { Home, BarChart, Users, Settings, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Dashboard", icon: <Home />, link: "/" },
  { label: "Analytics", icon: <BarChart />, link: "/analytics" },
  { label: "Users", icon: <Users />, link: "/users" },
  { label: "Settings", icon: <Settings />, link: "/settings" },
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState<string>("Dashboard");

  const handleClick = (label: string) => {
    setActiveItem(label);
  };

  return (
    <aside className={cn("h-screen bg-slate-900 text-white p-4 transition-all", collapsed ? "w-16" : "w-64")}>
      <button className="mb-4 p-2" onClick={() => setCollapsed(!collapsed)}>
        <Menu />
      </button>
      <nav>
        {menuItems.map(({ label, icon, link }) => (
          <a
            key={label}
            href={link}
            className={cn(
              "flex items-center gap-3 p-2 rounded hover:bg-slate-700",
              activeItem === label ? "bg-slate-700" : ""
            )}
            onClick={() => handleClick(label)}
          >
            {icon}
            {!collapsed && <span>{label}</span>}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
