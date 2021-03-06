import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../../shopPage/collectionPreview/collectionPreview";
class Jackets extends React.Component {
  render() {
    const jackets = this.props.data.find((section) => {
      return section.title === "Jackets";
    });
    return (
      <CollectionPreview
        items={jackets.items}
        title={jackets.title}
        itemsArrayLength={jackets.items.length}
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
export default connect(mapStateToProps, mapDispatchToProps)(Jackets);
