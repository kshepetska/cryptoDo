import {FaqAndSupportElementType} from '../store/useFaqAndSupportStore';
import {FaqAndSupportElement} from './FaqAndSupportElement';

type Props = {
  list: FaqAndSupportElementType[];
  title: string;
};

export const FaqAndSupportBlock: React.FC<Props> = ({list, title}) => {
  return (
    <div className="rounded-[1.25rem] overflow-hidden">
      <div>
        {list.map(el => {
          return <FaqAndSupportElement key={el.id} element={el} />;
        })}
      </div>
    </div>
  );
};
