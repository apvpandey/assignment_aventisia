import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Knowledgebase from "../pages/Knowledgebase";
import CreateNewModal from "../pages/CreateNewModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen font-sans bg-gray-50 overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Knowledgebase />
      </div>

      {modalOpen && <CreateNewModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}
