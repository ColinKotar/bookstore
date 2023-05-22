import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import BookForm from 'src/components/Book/BookForm'

import type { CreateBookInput } from 'types/graphql'

const CREATE_BOOK_MUTATION = gql`
  mutation CreateBookMutation($input: CreateBookInput!) {
    createBook(input: $input) {
      id
    }
  }
`

const NewBook = () => {
  const [createBook, { loading, error }] = useMutation(CREATE_BOOK_MUTATION, {
    onCompleted: () => {
      toast.success('Book created')
      navigate(routes.books())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateBookInput) => {
    createBook({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Book</h2>
      </header>
      <div className="rw-segment-main">
        <BookForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBook
