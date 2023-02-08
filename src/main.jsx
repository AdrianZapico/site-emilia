import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter,RouterProvider,Route} from 'react-router-dom'
import Home from './routes/Home/Home'
import Chat from './routes/Chat/Chat'
import Contact from './routes/Contact/Contact'
import GlobalStyle from './style/global'

const router = createBrowserRouter([
  {
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/chat',
        element:<Chat/>,
      },
      {
        path:'/contact',
        element:<Contact/>,
      }
    ]
  }
]

)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <GlobalStyle/>
  </React.StrictMode>,
)
