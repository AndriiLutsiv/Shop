import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../../shopPage/collectionPreview/collectionPreview";
class Hats extends React.Component {
  render() {
    const hats = this.props.data.find((section) => {
      return section.title === "Hats";
    });

    return (
      <CollectionPreview
        items={hats.items}
        title={hats.title}
        itemsArrayLength={hats.items.length}
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
export default connect(mapStateToProps, mapDispatchToProps)(Hats);
