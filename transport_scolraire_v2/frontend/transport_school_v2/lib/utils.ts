import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
export const NEXT_PUBLIC_API_URL_STUDENT=process.env.NEXT_PUBLIC_API_URL_STUDENT
