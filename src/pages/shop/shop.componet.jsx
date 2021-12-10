import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopcollections } from "../../redux/shop/shop.selectors.js";

import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopcollections,
});

export default connect(mapStateToProps)(ShopPage);
