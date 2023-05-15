import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
//import leaftlet css
import 'leaflet/dist/leaflet.css';
import '@changey/react-leaflet-markercluster/dist/styles.min.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/router';
import AuthContextProvider from './providers/AuthContextProvider';


// const App: React.FC = () => {
//   return (
//     <div>
//       <h1>Annonces</h1>
//       <CardsList cards={[a, b]} />
//       {/* <CardItem annonce={a} /> appeler votre composant avec l'annonce exemple */}
//     </div>
//   );
// };

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <AuthContextProvider>
        <RouterProvider router={router} />
    </AuthContextProvider>
</React.StrictMode>,
)