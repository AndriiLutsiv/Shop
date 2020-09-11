import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../../shopPage/collectionPreview/collectionPreview";
class Mens extends React.Component {
  render() {
    const mens = this.props.data.find((section) => {
      return section.title === "Mens";
    });
    return (
      <CollectionPreview
        items={mens.items}
        title={mens.title}
        itemsArrayLength={mens.items.length}
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
export default connect(mapStateToProps, mapDispatchToProps)(Mens);
