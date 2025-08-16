import type { Meta, StoryObj } from '@storybook/react-vite';
import { useMemo, useState } from 'react';
import { DataTable } from './DataTable';
import { TablePagination } from './TablePagination';
import { TableSearchBar } from './TableSearchBar';
import type { Column } from '../../types/table';

type User = { id: number; name: string; age: number; email: string };

const columns: Column<User>[] = [
  { header: 'ID', key: 'id', sortable: true },
  { header: 'Name', key: 'name', sortable: true },
  { header: 'Age', key: 'age', sortable: true },
  { header: 'Email', key: 'email' },
];

const data: User[] = [
  { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
  { id: 3, name: 'Charlie', age: 28, email: 'charlie@example.com' },
  { id: 4, name: 'David', age: 35, email: 'david@example.com' },
  { id: 5, name: 'Eva', age: 22, email: 'eva@example.com' },
  { id: 6, name: 'Frank', age: 29, email: 'frank@example.com' },
  { id: 7, name: 'Grace', age: 31, email: 'grace@example.com' },
];

const meta: Meta<typeof DataTable<User>> = {
  title: 'Components/Table/DataTable',
  component: DataTable<User>,
  parameters: { layout: 'centered' },
};
export default meta;

export const CoreOnly: StoryObj = {
  render: () => (
    <div className="w-[44rem]">
      <DataTable<User> data={data} columns={columns} />
    </div>
  ),
};

export const WithSearchAndPagination: StoryObj = {
  render: () => {
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(0);
    const rowsPerPage = 3;

    const filtered = useMemo(
      () => data.filter((row) =>
        JSON.stringify(row).toLowerCase().includes(query.toLowerCase())
      ),
      [query]
    );

    const paginated = useMemo(
      () => filtered.slice(page * rowsPerPage, (page + 1) * rowsPerPage),
      [filtered, page]
    );

    const totalPages = Math.ceil(filtered.length / rowsPerPage);
    if (page >= totalPages && totalPages > 0) setPage(0);

    return (
      <div className="w-[44rem]">
        <TableSearchBar query={query} onChange={setQuery} />
        <DataTable<User> data={paginated} columns={columns} />
        <TablePagination
          page={page}
          rowsPerPage={rowsPerPage}
          total={filtered.length}
          onPageChange={setPage}
        />
      </div>
    );
  },
};
