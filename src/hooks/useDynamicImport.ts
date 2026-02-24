'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

export function useDynamicImport<T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  options: {
    fallback?: React.ReactNode
    ssr?: boolean
  } = {}
) {
  const [Component, setComponent] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const loadComponent = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const module = await importFunc()
        setComponent(() => module.default)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load component'))
      } finally {
        setIsLoading(false)
      }
    }

    loadComponent()
  }, [importFunc])

  const DynamicComponent = Component ? dynamic(
    () => Promise.resolve({ default: Component }),
    {
      ...options,
      loading: () => options.fallback || React.createElement('div', { className: 'animate-pulse bg-gray-200 rounded-lg h-32' })
    }
  ) : null

  return { DynamicComponent, isLoading, error }
}
