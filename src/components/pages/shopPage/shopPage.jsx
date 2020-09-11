import React from "react";
import CollectionPreview from "./collectionPreview/collectionPreview";
import { connect } from "react-redux";
class ShopPage extends React.Component {
  render() {
    return (
      <div className="shoppage">
        {this.props.data.map((section) => {
          return (
            <CollectionPreview
              key={section.id}
              items={section.items}
              title={section.title}
              itemsArrayLength={5}
            />
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.cartPreviewReducer.items,
    data: state.departmentsDataReducer.sections,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
