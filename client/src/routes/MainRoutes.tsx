import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/components/pages/HomePage';

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [{ path: '/', element: <HomePage /> }],
};

export default MainRoutes;
