import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

import type { DeleteBookMutationVariables, FindBookById } from 'types/graphql'

const DELETE_BOOK_MUTATION = gql`
  mutation DeleteBookMutation($id: Int!) {
    deleteBook(id: $id) {
      id
    }
  }
`

interface Props {
  book: NonNullable<FindBookById['book']>
}

const Book = ({ book }: Props) => {
  const [deleteBook] = useMutation(DELETE_BOOK_MUTATION, {
    onCompleted: () => {
      toast.success('Book deleted')
      navigate(routes.books())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteBookMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete book ' + id + '?')) {
      deleteBook({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Book {book.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{book.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{book.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{book.description}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{book.price}</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{book.category}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{book.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editBook({ id: book.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(book.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Book
