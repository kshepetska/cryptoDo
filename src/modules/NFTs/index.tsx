import {LayoutDashboardView} from '../../layouts/LayoutDashboardView';
import {NFTDisplay} from './components/NFTs';

export const NftsPage = () => {
  return (
    <LayoutDashboardView>
      <div className="flex flex-col gap-6 px-4">
        <NFTDisplay />
      </div>
    </LayoutDashboardView>
  );
};
