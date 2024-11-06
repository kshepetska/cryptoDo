import {Link, useSearchParams} from 'react-router-dom';
import {ArrowDown} from '../../assets/svgComponents/ArrowDown';

interface BackwardNavigationProps {
  currentLocationName: string;
  targetLocationName: string;
  targetLocationPath: string;
}

const targets = {
  charts: {name: 'charts', path: '/charts'},
  dashboard: {name: 'dashboard', path: '/dashboard'},
};

export function BackwardNavigation({
  currentLocationName,
  targetLocationName,
  targetLocationPath,
}: BackwardNavigationProps) {
  const [searchParams] = useSearchParams();

  const target = searchParams.get('from');

  const targetName =
    targets[target as keyof typeof targets]?.name || targetLocationName;

  const targetPath =
    targets[target as keyof typeof targets]?.path || targetLocationPath;

  return (
    <div className="flex flex-col">
      <Link
        to={targetPath}
        className="items-center gap-2 font-inter py-1.5 text-xs text-white text-opacity-50 uppercase hidden md:flex"
      >
        <ArrowDown className="opacity-50 rotate-90" width={12} height={12} />
        {targetName}
      </Link>
      <div className="text-base 2xl:text-xl font-medium uppercase">
        {currentLocationName}
      </div>
    </div>
  );
}
