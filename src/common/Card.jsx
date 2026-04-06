import { useState } from "react";
import { IconDots } from "./Icons";

const MENU_ACTIONS = ["Edit", "Duplicate", "Delete"];

export default function Card({ title, description, createdOn }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-[18px] flex flex-col min-h-[160px] relative hover:shadow-[0_2px_12px_rgba(79,70,229,0.09)] transition-shadow">
      <div className="flex items-start justify-between mb-2.5">
        <span className="font-semibold text-[14.5px] text-gray-900">
          {title}
        </span>

        <div className="relative">
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex items-center text-gray-400 hover:text-gray-600 p-1 rounded transition-colors"
          >
            <IconDots />
          </button>

          {menuOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setMenuOpen(false)}
              />
              <div className="absolute right-0 top-7 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden">
                {MENU_ACTIONS.map((action) => (
                  <button
                    key={action}
                    onClick={() => setMenuOpen(false)}
                    className={`block w-full text-left px-3.5 py-2.5 text-[13px] hover:bg-gray-50 transition-colors
                      ${action === "Delete" ? "text-red-500" : "text-gray-700"}`}
                  >
                    {action}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <p className="text-[13px] text-gray-500 leading-relaxed flex-1">
        {description}
      </p>

      <div className="mt-4 pt-2.5 border-t border-gray-100">
        <span className="text-xs text-gray-400">
          Created On:{" "}
          <span className="text-gray-700 font-medium">{createdOn}</span>
        </span>
      </div>
    </div>
  );
}
