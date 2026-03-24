'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function LocaleError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('[LTB] Page error:', error)
  }, [error])

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="text-center space-y-4 max-w-md">
        <h2 className="text-4xl font-bold">Something went wrong</h2>
        <p className="text-muted-foreground">
          This page encountered an error. Please try again.
        </p>
        <div className="flex gap-3 justify-center mt-6">
          <button
            onClick={reset}
            className="px-6 py-3 rounded-lg border hover:bg-muted transition text-sm font-medium"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition text-sm font-medium"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}
