import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FirstSteps } from './FirstSteps'
// import { MyAwesomeComponent } from './MyAwesomeComponent'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstSteps/>
    {/* <MyAwesomeComponent/> */}
    
  </StrictMode>,
)
