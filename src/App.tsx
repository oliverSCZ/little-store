import { MainLayout } from './layout/MainLayout';
import { FavoriteList, ProductList } from './components';

const App = () => {

  return (
    <MainLayout>
      {/* LISTADO DE PRODUCTOS */}
      <ProductList />
      <FavoriteList />
    </MainLayout>
  )
}

export default App