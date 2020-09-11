import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../../shopPage/collectionPreview/collectionPreview";
class Sneakers extends React.Component {
  render() {
    const sneakers = this.props.data.find((section) => {
      return section.title === "Sneakers";
    });
    return (
      <CollectionPreview
        items={sneakers.items}
        title={sneakers.title}
        itemsArrayLength={sneakers.items.length}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.departmentsDataReducer.sections,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Sneakers);
