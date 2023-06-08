import { useContext} from 'react';
import { MainLayout } from './layout/MainLayout';
import { ProductContext } from './context/products';

const App = () => {

  const contexto = useContext(ProductContext);
  console.log({ contexto });

  return (
    <MainLayout>
      {/* LISTADO DE PRODUCTOS */}
    <div>

    </div>
    <div>

    </div>
  </MainLayout>
  )
}

export default App