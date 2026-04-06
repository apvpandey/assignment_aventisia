import { NAV_ITEMS } from "../data";
import { getIcon } from "../common/Icons";

export default function Sidebar() {
  return (
    <aside className="w-[220px] bg-white border-r border-gray-200 overflow-y-auto shrink-0 py-3">
      {NAV_ITEMS.map(({ section, items }) => (
        <div key={section} className="mb-1">
          <p className="text-[10.5px] font-semibold text-gray-400 tracking-widest px-[18px] pt-2.5 pb-1 uppercase">
            {section}
          </p>

          {items.map(({ label, iconKey, active }) => {
            const Icon = getIcon(iconKey);
            return (
              <button
                key={label}
                className={`
                  flex items-center gap-2.5 w-full px-[18px] py-2 text-[13.5px] text-left
                  border-l-[3px] transition-colors cursor-pointer
                  ${
                    active
                      ? "bg-[#EEF2FF] border-[#4F46E5] text-[#4F46E5] font-medium"
                      : "border-transparent text-gray-600 font-normal hover:bg-gray-50"
                  }
                `}
              >
                <Icon />
                {label}
              </button>
            );
          })}
        </div>
      ))}
    </aside>
  );
}
