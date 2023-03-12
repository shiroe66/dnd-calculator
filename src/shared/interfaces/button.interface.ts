export interface Button {
  appearance?: 'primary' | 'secondary';
  content: string;
  size: Size;
}

export type Size = 's' | 'm' | 'l' | 'xl';
