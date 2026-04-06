import { useState } from "react";
import { IconSearch, IconPlus } from "../common/Icons";
import Card from "../common/Card";
import Pagination from "../common/Pagination";
import { CARDS } from "../data";
import Button from "../common/Button";
import CreateNewModal from "./CreateNewModal";

export default function Knowledgebase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = CARDS.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      <main className="flex flex-col h-full px-8 pt-3 pb-0">
        <div className="flex items-center justify-between mb-6 shrink-0">
          <h1 className="text-[18px] font-bold text-gray-900 tracking-tight">
            Knowledge Base
          </h1>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 h-[38px] w-[220px] focus-within:border-[#4F46E5] transition-colors">
              <span className="text-gray-400 flex">
                <IconSearch />
              </span>
              <input
                value={search}
                // onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="border-none outline-none text-[13px] text-gray-700 bg-transparent flex-1 placeholder:text-gray-400"
              />
            </div>

            <Button onClick={() => setModalOpen(true)}>
              <IconPlus /> Create New
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-3 gap-4 mb-5 m-4">
            {filtered.map((card) => (
              <Card key={card.id} {...card} />
            ))}

            {filtered.length === 0 && (
              <div>
                No results found.
              </div>
            )}
          </div>
        </div>

        <div className="shrink-0 bg-white border-t border-gray-100 px-4 py-3">
          <Pagination total={filtered.length} perPage={10} current={1} />
        </div>
      </main>

      {modalOpen && <CreateNewModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}
