import React from "react";
import {
  EmptyState,
  Table,
  TableHead,
  TableScroll,
  Td,
  Th,
  Tr,
} from "@/style/table";

export type Column<T> = {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
};

type DataTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  keyExtractor: (item: T) => string;
  onRowClick?: (item: T) => void;
  isLoading?: boolean;
  emptyMessage?: string;
};

function DataTable<T>({
  columns,
  data,
  keyExtractor,
  onRowClick,
  isLoading = false,
  emptyMessage = "No records found.",
}: DataTableProps<T>) {
  if (isLoading) return <EmptyState>Loading records...</EmptyState>;
  if (data.length === 0) return <EmptyState>{emptyMessage}</EmptyState>;

  return (
    <TableScroll>
      <Table>
        <TableHead>
          <tr>
            {columns.map((column) => (
              <Th key={column.key}>{column.header}</Th>
            ))}
          </tr>
        </TableHead>
        <tbody>
          {data.map((item) => (
            <Tr
              key={keyExtractor(item)}
              $clickable={Boolean(onRowClick)}
              onClick={() => onRowClick?.(item)}
            >
              {columns.map((column) => {
                const value = (item as Record<string, unknown>)[column.key];
                return (
                  <Td key={column.key}>
                    {column.render
                      ? column.render(item)
                      : value != null
                        ? String(value)
                        : ""}
                  </Td>
                );
              })}
            </Tr>
          ))}
        </tbody>
      </Table>
    </TableScroll>
  );
}

export default DataTable;
