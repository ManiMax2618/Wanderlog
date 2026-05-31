import { useBucketList } from '../../context/BucketListContext';

const ActionButtons = ({ country }) => {
  const { addToBucketList, markVisited, removeFromBucketList, removeFromVisited, isInBucketList, isVisited } =
    useBucketList();

  const inList = isInBucketList(country.cca3);
  const alreadyVisited = isVisited(country.cca3);

  return (
    <div className="detail-actions">
      <button
        className={`detail-btn wishlist-btn ${inList ? 'active' : ''}`}
        onClick={() => (inList ? removeFromBucketList(country.cca3) : addToBucketList(country))}
        disabled={alreadyVisited}
      >
        {inList ? '♥ Remove from Wishlist' : '♡ Add to Wishlist'}
      </button>
      <button
        className={`detail-btn visited-btn ${alreadyVisited ? 'active' : ''}`}
        onClick={() =>
          alreadyVisited ? removeFromVisited(country.cca3) : markVisited(country)
        }
      >
        {alreadyVisited ? '✓ Unmark Visited' : '✈ Mark as Visited'}
      </button>
    </div>
  );
};

export default ActionButtons;
