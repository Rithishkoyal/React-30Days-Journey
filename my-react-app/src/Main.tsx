import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Chai from './Chai.tsx'
import Todo from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <Todo/>
 <Chai/>
  </StrictMode>,
)
