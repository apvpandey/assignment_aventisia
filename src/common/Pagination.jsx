import {
  IconChevronFirst,
  IconChevronLast,
  IconChevronLeft,
  IconChevronRight,
} from "./Icons";

const NavBtn = ({ icon: Icon }) => (
  <button className="w-[30px] h-[30px] flex items-center justify-center border border-gray-200 rounded-md text-gray-500 hover:bg-gray-100 transition-colors">
    <Icon />
  </button>
);

export default function Pagination({ total, perPage, current }) {
  const totalPages = Math.max(1, Math.ceil(total / perPage));

  return (
    <div className="flex items-center justify-between">
      <span className="text-[13px] text-gray-500 font-bold">{total} rows</span>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <span className="text-[13px] text-gray-500 font-bold">Rows per page</span>
          <select
            defaultValue={10}
            className="border border-gray-200 rounded-md px-2 py-1 text-[13px] text-gray-700 bg-white cursor-pointer outline-none focus:border-[#4F46E5] transition-colors"
          >
            {[5, 10, 20, 50].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </div>

        <span className="text-[13px] text-gray-500 font-bold">
          page {current} of {totalPages}
        </span>

        <div className="flex gap-0.5">
          <NavBtn icon={IconChevronFirst} />
          <NavBtn icon={IconChevronLeft} />
          <NavBtn icon={IconChevronRight} />
          <NavBtn icon={IconChevronLast} />
        </div>
      </div>
    </div>
  );
}
