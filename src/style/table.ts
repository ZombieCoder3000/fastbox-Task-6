import styled from "styled-components";

export const TableScroll = styled.section`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.875rem;
`;

export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Th = styled.th`
  padding: 0.875rem 1rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.muted};
  white-space: nowrap;
`;

export const Tr = styled.tr<{ $clickable?: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};

  &:hover {
    background-color: ${({ $clickable, theme }) =>
      $clickable ? theme.colors.surface : "transparent"};
  }
`;

export const Td = styled.td`
  padding: 0.875rem 1rem;
`;

export const EmptyState = styled.p`
  margin: 0;
  padding: 3rem 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted};
`;
