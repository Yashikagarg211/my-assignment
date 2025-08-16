import { useState } from "react";
import { ThemeToggleButton } from "./components/theme/ThemeToggleButton";
import { TextInput } from "./components/forms/TextInput";
import { DataTable } from "./components/data-display/DataTable";
import { TablePagination } from "./components/data-display/TablePagination";
import { TableSearchBar } from "./components/data-display/TableSearchBar";
import type { Column } from "./types/table";

type User = {
  id: number;
  name: string;
  age: number;
  email: string;
};

const columns: Column<User>[] = [
  { header: "ID", key: "id", sortable: true },
  { header: "Name", key: "name", sortable: true },
  { header: "Age", key: "age", sortable: true },
  { header: "Email", key: "email" },
];

const users: User[] = [
  { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
  { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
  { id: 3, name: "Charlie", age: 28, email: "charlie@example.com" },
  { id: 4, name: "David", age: 35, email: "david@example.com" },
  { id: 5, name: "Eva", age: 22, email: "eva@example.com" },
  { id: 6, name: "Frank", age: 29, email: "frank@example.com" },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const rowsPerPage = 3;

  const filtered = users.filter((row) =>
    JSON.stringify(row).toLowerCase().includes(query.toLowerCase())
  );
  const paginated = filtered.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-gray-100">
      {/* Overlay subtle pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 dark:opacity-20"></div>

      <div className="relative mx-auto max-w-5xl space-y-12 p-8">
        {/* Header */}
        <header className="flex items-center justify-between rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-lg dark:bg-gray-900/80">
          <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text">
            ✨ UI Assignment Demo
          </h1>
          <ThemeToggleButton />
        </header>

        {/* Intro */}
        <div className="rounded-xl border border-white/30 bg-white/40 p-5 text-sm text-gray-800 shadow-md backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/60 dark:text-gray-200">
          Explore the reusable component library in Storybook:{" "}
          <code className="rounded bg-gray-900 px-2 py-1 text-xs font-mono text-pink-400 dark:bg-gray-800">
            npm run storybook
          </code>
        </div>

        {/* Form demo */}
        <section className="rounded-2xl border border-white/30 bg-white/90 p-6 shadow-xl backdrop-blur-lg dark:border-gray-800 dark:bg-gray-900/80">
          <h2 className="mb-4 text-xl font-semibold text-indigo-600 dark:text-indigo-400">
            📩 Form Example
          </h2>
          <TextInput
            label="Email"
            placeholder="Enter your email"
            validate={(val) =>
              val.includes("@") ? null : "Email must include @"
            }
            helperText="We’ll never share your email."
            clearable
          />
        </section>

        {/* Table demo */}
        <section className="rounded-2xl border border-white/30 bg-white/90 p-6 shadow-xl backdrop-blur-lg dark:border-gray-800 dark:bg-gray-900/80">
          <h2 className="mb-4 text-xl font-semibold text-indigo-600 dark:text-indigo-400">
            📊 Table Example
          </h2>
          <TableSearchBar query={query} onChange={setQuery} />
          <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
            <DataTable<User> data={paginated} columns={columns} />
          </div>
          <div className="mt-4">
            <TablePagination
              page={page}
              rowsPerPage={rowsPerPage}
              total={filtered.length}
              onPageChange={setPage}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
