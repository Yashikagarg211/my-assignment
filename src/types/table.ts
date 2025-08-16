import type { ReactNode } from 'react';

export type SortDir = 'asc' | 'desc' | null;

export type Column<T> = {
    header: string;
    key?: keyof T | string;
    sortAccessor?: (row: T) => string | number | Date;
    cell?: (row: T, rowIndex: number) => ReactNode;
    sortable?: boolean;
    className?: string;
};
