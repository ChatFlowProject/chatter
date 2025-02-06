import { useState } from 'react'
import NavigationCard from './NavigationCard'

const HomeNavigation = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null)

  return (
    <div className='flex flex-col w-full items-start gap-[2px]'>
      <NavigationCard
        path='friends'
        isActive={selectedPath === 'friends'}
        onClick={() => setSelectedPath('friends')}
      >
        Friends
      </NavigationCard>
      <NavigationCard
        path='nitro'
        isActive={selectedPath === 'nitro'}
        onClick={() => setSelectedPath('nitro')}
      >
        Nitro
      </NavigationCard>
    </div>
  )
}

export default HomeNavigation
