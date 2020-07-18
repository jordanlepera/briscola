import React, { Suspense } from 'react'
import Main from '../../pages/Main'
import Spinner from '../Spinner/Spinner'

const App = () => (
  <Suspense fallback={<Spinner />}>
    <Main />
  </Suspense>
)

export default App
