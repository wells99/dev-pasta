import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GoogleDriveFolder from './GoogleDriveFolder.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleDriveFolder folderId="1e6SAwEiKJuk8BxyhcQd5A1knIfsGrGCW" apiKey="AIzaSyBDz6knTZHHrI0ruvWE9WtTZyVC6znOu1Y" />
  </StrictMode>,
)
