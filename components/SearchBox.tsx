// components/SearchBox.tsx
// Author: Hardy Ahuja
// Date: October 27, 2026
// This component renders a text input field to filter the student list.
// It receives the current search term and an update function as props.
// User input triggers the callback to update the parent state immediately.
// We decouple local state from this component to ensure the parent portal maintains a single source of truth for the list filter.

interface SearchBoxProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBox({ searchTerm, onSearchChange }: SearchBoxProps) {
  // We attach onChange to broadcast keystrokes up to the parent component
  return (
    <div className="w-full max-w-sm">
      <input
        type="text"
        placeholder="Search students by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-slate-800"
      />
    </div>
  );
}