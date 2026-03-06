export const Priority = {
  Low: 'BAJA',
  Medium: 'MEDIA',
  High: 'ALTA',
} as const;

export type PriorityType = (typeof Priority)[keyof typeof Priority];

export interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
  priority: PriorityType;
}
