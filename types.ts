import { ReactNode } from 'react';

export interface Section {
  id: string;
  title: string;
  subtitle?: string;
  content: ReactNode;
  readTime?: number; // in minutes
}

export interface NavigationItem {
  id: string;
  label: string;
}

export interface PracticeSession {
  day: string;
  focus: string;
  completed: boolean;
}