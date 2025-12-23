import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './routers/router'
import 'sweetalert2/dist/sweetalert2.js'
import { Provider } from 'react-redux'
import { store } from './redux/store'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router}/>  {/* Router wraps everything */}
    </Provider>
)