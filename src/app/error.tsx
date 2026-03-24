'use client'

import { useEffect } from 'react'

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('[LTB] Error:', error)
  }, [error])

  return (
    <html>
      <body className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
        <div className="text-center space-y-4 max-w-md">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Something went wrong</h1>
          <p className="text-gray-600 dark:text-gray-400">An unexpected error occurred.</p>
          <div className="flex gap-3 justify-center mt-6">
            <button
              onClick={reset}
              className="px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition text-sm font-medium"
            >
              Try again
            </button>
            <a
              href="/"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition text-sm font-medium"
            >
              Home
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
