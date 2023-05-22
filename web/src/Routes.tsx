import { Set, Router, Route, Private } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/" page={SignupPage} name="signup" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

      <Private unauthenticated="login">
        <Set wrap={ScaffoldLayout} title="Books" titleTo="books" buttonLabel="New Book" buttonTo="newBook">
          <Route path="/books" page={BookBooksPage} name="books" />
          <Route path="/books/new" page={BookNewBookPage} name="newBook" />
          <Route path="/books/{id:Int}/edit" page={BookEditBookPage} name="editBook" />
          <Route path="/books/{id:Int}" page={BookBookPage} name="book" />
        </Set>
      </Private>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
