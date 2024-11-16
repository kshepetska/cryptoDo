import {LayoutDashboardView} from '../../layouts/LayoutDashboardView';
import {CryptoNews} from './components/News';

const NewsPage = () => {
  return (
    <LayoutDashboardView>
      <div className="flex flex-col gap-6 px-4">
        <CryptoNews />
      </div>
    </LayoutDashboardView>
  );
};

export default NewsPage;
