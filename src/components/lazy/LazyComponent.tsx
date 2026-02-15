'use client'

import { Suspense } from 'react'
import { cn } from '@/lib/utils'

interface LazyComponentProps {
  fallback?: React.ReactNode
  className?: string
  children: React.ReactNode
}

export function LazyComponent({ 
  fallback = <div className="animate-pulse bg-gray-200 rounded-lg h-32" />,
  className,
  children 
}: LazyComponentProps) {
  return (
    <div className={cn('transition-all duration-300', className)}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </div>
  )
}

export function LazySection({ 
  fallback,
  className,
  children 
}: LazyComponentProps) {
  return (
    <section className={cn('min-h-screen', className)}>
      <LazyComponent fallback={fallback}>
        {children}
      </LazyComponent>
    </section>
  )
}
