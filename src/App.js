import './App.css';
import{RouterProvider} from 'react-router-dom';
import router from './Routes/Routes';


function App() {
  return (
    <div className="max-w-[1440px] mx-auto border py-10 border-blue-500">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
