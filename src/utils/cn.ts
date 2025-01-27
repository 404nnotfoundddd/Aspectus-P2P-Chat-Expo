import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...classNameInputs: ClassValue[]) => twMerge(clsx(classNameInputs))