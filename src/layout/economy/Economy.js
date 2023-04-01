import React, { lazy, Suspense } from 'react'
import PrograssCircal from '../../units/PrograssCircal';
const OtherComponent = lazy(() => import('../../components/economy/MainEconomy'));

const Economy = () => {
  return (
    <Suspense  fallback={<PrograssCircal />}>
       <OtherComponent />
    </Suspense>
  )
}

export default Economy
