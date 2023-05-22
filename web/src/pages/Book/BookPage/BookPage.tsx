import BookCell from 'src/components/Book/BookCell'

type BookPageProps = {
  id: number
}

const BookPage = ({ id }: BookPageProps) => {
  return <BookCell id={id} />
}

export default BookPage
