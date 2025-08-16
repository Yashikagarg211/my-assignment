import { useMemo, useState } from 'react';
import type { Column, SortDir } from '../../types/table';
import { cn } from '../../utils/classNames';

export interface DataTableProps<T extends Record<string, unknown>> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  emptyMessage?: string;
  className?: string;
}

export function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  loading,
  emptyMessage = 'No data',
  className,
}: DataTableProps<T>) {
  const [sortIndex, setSortIndex] = useState<number | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>(null);

  const sorted = useMemo(() => {
    if (sortIndex == null || sortDir == null) return data;
    const col = columns[sortIndex];
    const copy = [...data];
    const key = col.key as keyof T | undefined;
    const getVal = (row: T): unknown =>
      col.sortAccessor ? col.sortAccessor(row) : key ? row[key] : '';

    copy.sort((a, b) => {
      const av = getVal(a);
      const bv = getVal(b);

      if (typeof av === 'string' && typeof bv === 'string') {
        return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
      }
      if (typeof av === 'number' && typeof bv === 'number') {
        return sortDir === 'asc' ? av - bv : bv - av;
      }
      return 0;
    });

    return copy;
  }, [data, columns, sortIndex, sortDir]);

  function toggleSort(i: number) {
    if (sortIndex !== i) {
      setSortIndex(i);
      setSortDir('asc');
      return;
    }
    setSortDir((d) => (d === 'asc' ? 'desc' : d === 'desc' ? null : 'asc'));
    if (sortDir === null) setSortIndex(null);
  }

  if (loading) return <div className="p-4 text-center">Loading…</div>;
  if (!loading && sorted.length === 0)
    return <div className="p-4 text-center">{emptyMessage}</div>;

  return (
    <table className={cn('w-full border-collapse text-sm', className)}>
      <thead className="bg-gray-50 dark:bg-gray-900">
        <tr>
          {columns.map((c, i) => (
            <th key={i} className={cn('px-3 py-2 font-medium', c.className)}>
              {c.sortable ? (
                <button
                  type="button"
                  onClick={() => toggleSort(i)}
                  className="inline-flex items-center gap-1"
                >
                  {c.header}
                  {sortIndex === i ? (sortDir === 'asc' ? '▲' : '▼') : '↕'}
                </button>
              ) : (
                c.header
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sorted.map((row, r) => (
          <tr
            key={r}
            className="border-t border-gray-100 dark:border-gray-800"
          >
            {columns.map((c, i) => {
              const cellValue = c.cell
                ? c.cell(row, r)
                : (row[c.key as keyof T] ?? '') as React.ReactNode;

              return (
                <td key={i} className="px-3 py-2">
                  {cellValue}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
