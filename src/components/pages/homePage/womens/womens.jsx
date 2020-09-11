import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../../shopPage/collectionPreview/collectionPreview";
class Womens extends React.Component {
  render() {
    const womens = this.props.data.find((section) => {
      return section.title === "Womens";
    });
    return (
      <CollectionPreview
        items={womens.items}
        title={womens.title}
        itemsArrayLength={womens.items.length}
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
export default connect(mapStateToProps, mapDispatchToProps)(Womens);
