import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { secret } from "./secrets.jsx";
import GoogleDriveFolder from './GoogleDriveFolder.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleDriveFolder folderId={secret.folderId} apiKey={secret.apiKey} />
  </StrictMode>,
)
