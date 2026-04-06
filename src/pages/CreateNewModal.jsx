import Button from "../common/Button";
import { IconX } from "../common/Icons";

const FIELDS = {
  vectorStore: ["Qdrant"],
  embeddingModel: ["text-embedding-ada-002"],
};

function Label({ children, required }) {
  return (
    <label className="block text-[10px] font-medium text-gray-700 mb-1.5">
      {children}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-[10px] text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 transition-all"
    />
  );
}

function Select({ options, defaultValue }) {
  return (
    <div className="relative">
      <select
        defaultValue={defaultValue}
        className="w-full appearance-none px-3.5 py-2.5 border border-gray-200 rounded-lg text-[10px] text-gray-400 bg-white cursor-pointer outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 transition-all"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-sm">
        ▾
      </span>
    </div>
  );
}

export default function CreateNewModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-gray-900/45 flex items-center justify-end animate-fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[500px] h-full flex flex-col shadow-2xl animate-slide-in rounded-l-[10px]"
      >
        <div className="pl-[1.1rem] pt-6 pb-5 border-b border-gray-100 flex items-start justify-between shrink-0">
          <div>
            <h2 className="text-[12px] font-bold text-gray-900 leading-tight">
              Create New Knowledge Base
            </h2>
            <p className="mt-1.5 text-[10px] text-gray-400">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex items-center text-gray-400 hover:text-gray-600 p-1 rounded-md transition-colors mt-0.5"
          >
            <IconX />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 space-y-6">
          <div>
            <Label required>Name (Cannot be edited later)</Label>
            <Input type="text" placeholder="Name" />
          </div>
          <div>
            <Label>Description</Label>
            <textarea
              placeholder="Description"
              rows={4}
              className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-[10px] text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 transition-all resize-vertical"
            />
          </div>
          <div>
            <Label required>Vector Store</Label>
            <Select options={FIELDS.vectorStore} defaultValue="Qdrant" />
          </div>
          <div>
            <Label required>LLM Embedding Model</Label>
            <Select
              options={FIELDS.embeddingModel}
              defaultValue="text-embedding-ada-002"
            />
          </div>
        </div>

        <div className="px-5 py-5 border-t border-gray-100 flex justify-end gap-2.5 shrink-0">
          <Button>Create</Button>
        </div>
      </div>
    </div>
  );
}
