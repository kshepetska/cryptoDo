import {ContactSupport} from '../../components/ContactSupport/ContactSupport';
import {LayoutDashboardView} from '../../layouts/LayoutDashboardView';
import {FaqAndSupportBlock} from './components/FaqAndSupportBlock';
import {useFaqAndSupportStore} from './store/useFaqAndSupportStore';

const FaqAndSupport = () => {
  const {list} = useFaqAndSupportStore();

  return (
    <LayoutDashboardView>
      <div className="py-8 px-4 2xl:px-10">
        <div className="m-[2rem_auto] w-full rounded-20">
          <div className="xl:grid grid-cols-[1fr_248px] gap-x-12 items-start">
            <div>
              <h1 className="text-2xl xl:text-5xl font-bold mb-8 xl:mb-12 capitalize">
                Frequently asked questions
              </h1>
              <div className="grid gap-12 mb-[64px] xl:mb-[84px]">
                <FaqAndSupportBlock list={list} title={'faq'} />
              </div>
            </div>
            <div className="hidden xl:block">
              <ContactSupport variant="small" />
            </div>
          </div>
          <ContactSupport variant="large" />
        </div>
      </div>
    </LayoutDashboardView>
  );
};

export default FaqAndSupport;
