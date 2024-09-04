import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/Home-page/Home-page.jsx';

createRoot(document.getElementById('root')).render(


    <Homepage/>


)
