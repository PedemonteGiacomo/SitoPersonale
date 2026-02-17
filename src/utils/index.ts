import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Theme utilities
export const getThemeFromStorage = (): 'dark' | 'light' => {
  if (typeof window === 'undefined') return 'dark'
  return (localStorage.getItem('theme') as 'dark' | 'light') ?? 'dark'
}

export const setThemeInStorage = (theme: 'dark' | 'light') => {
  if (typeof window === 'undefined') return
  
  localStorage.setItem('theme', theme)
  
  // Apply theme to both document and body for maximum compatibility
  const elements = [document.documentElement, document.body]
  
  elements.forEach(element => {
    if (theme === 'dark') {
      element.classList.add('dark')
      element.classList.remove('light')
    } else {
      element.classList.remove('dark')
      element.classList.add('light')
    }
  })
  
  // Trigger a custom event for components that need to react to theme changes
  window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }))
}

// Animation utilities
export const shouldReduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Copy to clipboard utility
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    return true
  }
}

// Focus trap utility for modals
export const trapFocus = (element: HTMLElement) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  ) as NodeListOf<HTMLElement>
  
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus()
        e.preventDefault()
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus()
        e.preventDefault()
      }
    }
  }

  element.addEventListener('keydown', handleTabKey)
  return () => element.removeEventListener('keydown', handleTabKey)
}

// Smooth scroll to element
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ 
      behavior: shouldReduceMotion() ? 'auto' : 'smooth',
      block: 'start'
    })
  }
}