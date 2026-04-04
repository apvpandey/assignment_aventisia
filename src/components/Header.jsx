import { IconSearch, IconBell, IconChevronDown } from "./Icons";

export default function Header() {
  return (
    //    <header className="flex items-center gap-4 px-5 h-14 bg-[#1E1B4B] rounded-xl shadow-md max-w-[1200px] shrink-0 z-10">
    //      {/* Logo */}
    //      <div className="flex items-center gap-2.5 min-w-[168px]">
    //        <div className="w-8 h-8 rounded-lg bg-[#4F46E5] flex items-center justify-center font-bold text-base text-white">
    //          W
    //        </div>
    //        <span className="text-white font-semibold text-[15px] tracking-tight">
    //          Worcspace
    //        </span>
    //      </div>

    //      {/* Workspace selector */}
    //      <button className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-md px-3 py-[5px] text-[#E0E7FF] text-[13px] cursor-pointer hover:bg-white/15 transition-colors">
    //        Worcspace 1 <IconChevronDown />
    //      </button>

    //      {/* Global search */}
    //      <div className="flex-1 max-w-[480px] mx-auto flex items-center gap-2.5 bg-white/[0.08] border border-white/[0.12] rounded-lg px-3.5 h-9">
    //        <span className="text-white/45 flex">
    //          <IconSearch />
    //        </span>
    //        <input
    //          placeholder="Search..."
    //          className="bg-transparent border-none outline-none text-white text-[13px] flex-1 placeholder:text-white/40"
    //        />
    //        <span className="text-[11px] text-white/35 bg-white/[0.08] rounded px-1.5 py-0.5 tracking-wide">
    //          ⌘K
    //        </span>
    //      </div>

    //      {/* Right actions */}
    //      <div className="flex items-center gap-3.5 ml-auto">
    //        <button className="flex items-center text-white/70 hover:text-white transition-colors p-1">
    //          <IconBell />
    //        </button>
    //        <div className="w-8 h-8 rounded-full bg-[#4F46E5] flex items-center justify-center text-white text-xs font-semibold cursor-pointer hover:opacity-90 transition-opacity">
    //          GK
    //        </div>
    //      </div>
    //    </header>

    <div className="p-2">
      <header className="flex items-center gap-4 px-5 h-12 bg-[#1E1B4B] rounded-xl shadow-md mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2.5 min-w-[100px]">
          <div className="w-8 h-8 rounded-lg bg-[#4F46E5] flex items-center justify-center font-bold text-base text-white">
            W
          </div>
          <span className="text-white font-semibold text-[15px] tracking-tight">
            Worcspace
          </span>
        </div>

        {/* Workspace selector */}
        <button className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-[3px] text-[#E0E7FF] text-[12px] hover:bg-white/15 transition-colors">
          Worcspace 1 <IconChevronDown />
        </button>

        {/* Search */}
        <div className="flex max-w-[480px] mx-auto flex items-center gap-2.5 bg-white/[0.08] border border-white/[0.12] rounded-lg px-3.5 h-7">
          <span className="text-white/45 flex">
            <IconSearch />
          </span>
          <input
            placeholder="Search..."
            className="bg-transparent outline-none text-white text-[13px] flex-1 placeholder:text-white/40"
          />
          <span className="text-[11px] text-white/35 rounded px-0.5 py-0.5">
            ⌘K
          </span>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3.5 ml-auto">
          <button className="text-white/70 hover:text-white p-1">
            <IconBell />
          </button>
          <div className="w-8 h-8 rounded-full bg-[#4F46E5] flex items-center justify-center text-white text-xs font-semibold">
            GK
          </div>
        </div>
      </header>
    </div>
  );
}
