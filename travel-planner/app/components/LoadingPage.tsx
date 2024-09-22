import React from 'react'

export function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      <p className="mt-4 text-xl font-semibold">Planning your perfect trip...</p>
    </div>
  )
}