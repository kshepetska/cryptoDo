import loaderIcon from '../assets/loaderIcon.svg';

export const Loader = () => {
  return (
    <div>
      <img className="animate-spin" src={loaderIcon} alt="loaderIcon" />
    </div>
  );
};
