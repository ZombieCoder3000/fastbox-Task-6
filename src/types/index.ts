export type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}