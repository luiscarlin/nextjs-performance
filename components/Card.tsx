import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode, useState } from 'react';
import css from 'styled-jsx/css';

const Card = ({ children }: { children: ReactNode }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false));
  };

  return (
    <div className="card">
      <button className="card-refresh" onClick={() => refresh()}>
        <FontAwesomeIcon icon={faRefresh} />
      </button>
      {!isRefreshing && <>{children}</>}
      <style jsx>{styles}</style>
    </div>
  );
};

const styles = css`
  .card {
    border: 1px solid white;
    height: 400px;
    width: 350px;
    min-width: 350px;
    overflow: hidden;
    padding: 20px;
    position: relative;
  }

  .card-refresh {
    border-radius: 50%;
    background: transparent;
    aspect-ratio: 1 / 1;
    border: 1px solid white;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export default Card;
