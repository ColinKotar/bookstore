import EditBookCell from 'src/components/Book/EditBookCell'

type BookPageProps = {
  id: number
}

const EditBookPage = ({ id }: BookPageProps) => {
  return <EditBookCell id={id} />
}

export default EditBookPage
