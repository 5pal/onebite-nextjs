import BookItem from '@/components/book-item'
import { BookData } from '@/types'
import style from './page.module.css'

export const dynamic = 'auto'
// 특정 페이지의 유형을 강제로 Static, Dynamic 페이지로 설정
// 1. auto: 기본값, 아무것도 강제하지 않음.
// 2. force-dynamic: 페이지를 강제로 Dynamic 페이지로 설정
// 3. force-static: 페이지를 강제로 Static 페이지로 설정
// 4. error: 페이지를 강제로 Static 페이지 설정(설정하면 안되는 이유 -> 빌드 오류)

async function AllBooks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
    {
      cache: 'force-cache',
    },
  )
  if (!response.ok) {
    return <div>An error has occurred‼️</div>
  }
  const allBooks: BookData[] = await response.json()

  return (
    <div>
      {allBooks.map(book => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  )
}

async function RecoBooks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    {
      next: {
        revalidate: 3,
      },
    },
  )
  if (!response.ok) {
    return <div>An error has occurred‼️</div>
  }
  const recoBooks: BookData[] = await response.json()
  return (
    <div>
      {recoBooks.map(book => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  )
}
