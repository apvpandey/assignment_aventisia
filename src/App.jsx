import { useState } from "react";
// import TopBar from './components/TopBar';
// import Header from "./components/Header";

import Header from "../src/components/Header";
// import Sidebar from './components/Sidebar';
// import KnowledgeCard from './components/KnowledgeCard';
// import Pagination from './components/Pagination';
// import CreateNewModal from './components/CreateNewModal';
import { IconSearch, IconPlus } from "../src/components/Icons";
// import { CARDS } from './data';

export default function App() {
  // const [modalOpen, setModalOpen] = useState(false);
  // const [search, setSearch] = useState("");

  // const filtered = CARDS.filter(
  //   (c) =>
  //     c.title.toLowerCase().includes(search.toLowerCase()) ||
  //     c.description.toLowerCase().includes(search.toLowerCase()),
  // );

  return (
    <div className="flex flex-col h-screen font-sans bg-gray-50 overflow-hidden">
      <Header />

      {/* <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto px-8 py-7">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-[22px] font-bold text-gray-900 tracking-tight">
              Knowledge Base
            </h1>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 h-[38px] w-[220px] focus-within:border-[#4F46E5] transition-colors">
                <span className="text-gray-400 flex">
                  <IconSearch />
                </span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className="border-none outline-none text-[13px] text-gray-700 bg-transparent flex-1 placeholder:text-gray-400"
                />
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-1.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white px-[18px] py-2.5 rounded-lg text-[13.5px] font-semibold transition-colors shadow-[0_2px_8px_rgba(79,70,229,0.3)] cursor-pointer"
              >
                <IconPlus /> Create New
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-5">
            {filtered.map((card) => (
              <KnowledgeCard key={card.id} {...card} />
            ))}
            {filtered.length === 0 && (
              <div className="col-span-3 text-center py-16 text-[14px] text-gray-400">
                No results found.
              </div>
            )}
          </div>

          <Pagination total={filtered.length} perPage={10} current={1} />
        </main>
      </div> */}

      {/* {modalOpen && <CreateNewModal onClose={() => setModalOpen(false)} />} */}
    </div>
  );
}
