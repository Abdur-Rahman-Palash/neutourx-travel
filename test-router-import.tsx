'use client'

import { useRouter } from 'next/navigation'

export default function TestRouterImport() {
  const router = useRouter()
  
  const handleNavigation = () => {
    router.push('/test')
  }
  
  return (
    <div>
      <h1>Test Router Import</h1>
      <button onClick={handleNavigation}>Test Navigation</button>
    </div>
  )
}
