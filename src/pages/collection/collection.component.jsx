import "./collection.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};
const CollectionPage = (props) => {
  const { collections } = props;
  let params = useParams();
  const collection = collections[params.collectionName];
  const { title, items } = collection;


  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { collections: state.shopReducer.collections };
};

export default connect(mapStateToProps)(CollectionPage);
