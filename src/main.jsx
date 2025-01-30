import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GoogleDriveFolder from './GoogleDriveFolder.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleDriveFolder folderId="" apiKey="AIzaSyBDz6knTZHHr I0ruvWE9WtTZyVC6znOu1Y" />
  </StrictMode>,
)
