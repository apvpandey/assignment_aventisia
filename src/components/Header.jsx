import { IconSearch, IconBell, IconChevronDown } from "../common/Icons";

export default function Header() {
  return (
    <div className="p-2">
      <header className=" flex items-center gap-4 px-5 h-12 bg-[#1E1B4B] rounded-xl shadow-md mx-auto">
        <div className="flex items-center gap-2.5 min-w-[100px]">
          <div className="w-8 h-8 rounded-lg bg-[#4F46E5] flex items-center justify-center font-bold text-base text-white">
            A
          </div>
          <span className="text-white font-semibold text-[15px] tracking-tight">
            Worcspace
          </span>
        </div>

        <button className="bg-[#213A6E] flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 text-[#E0E7FF] text-[12px] hover:bg-white/15 transition-colors">
          Worcspace 1 <IconChevronDown />
        </button>

        <div className=" bg-[#302C68] flex max-w-[480px] mx-auto flex items-center gap-2.5 bg-white/[0.08] border border-white/[0.12] rounded-lg px-3.5 h-7">
          <span className="text-white/45 flex">
            <IconSearch />
          </span>
          <input
            placeholder="Search..."
            className="bg-transparent outline-none text-white text-[13px] flex-1 placeholder:text-white/40"
          />
          <span className="text-[10px] text-white/35 rounded px-0.5 py-0.5">
            ⌘K
          </span>
        </div>

        <div className="flex items-center gap-3.5 ml-auto">
          <button className="text-white/70 hover:text-white p-1">
            <IconBell />
          </button>
          <div className="w-8 h-8 rounded-full bg-[#4F46E5] flex items-center justify-center text-white text-xs font-semibold">
            AP
          </div>
        </div>
      </header>
    </div>
  );
}
