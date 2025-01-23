import { ReactNode, Suspense } from 'react'
import Searchbar from '../../components/searchbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {/*사전 렌더링에서 배제된다.*/}
        {/*클라이언트 측에서만 렌더링된다.*/}
        <Searchbar />
      </Suspense>
      {children}
    </div>
  )
}
