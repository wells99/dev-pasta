import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GoogleDriveFolder from './GoogleDriveFolder.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleDriveFolder folderId=`${folderId}` apiKey=`${apiKey}` />
  </StrictMode>,
)
