import React from "react";
import MenuItem from "./menuItem/menuItem";
import classes from "./menu.module.css";
class Menu extends React.Component {
  state = {
    departments: [
      {
        title: "hats",
        imageUrl:
          "https://i1.wp.com/www.society19.com/uk/wp-content/uploads/sites/5/2018/04/mens-hats.jpg?fit=1000%2C750&ssl=1",
        id: "hats",
        linkUrl: "shop/hats",
      },
      {
        title: "jackets",
        imageUrl:
          "https://miro.medium.com/max/3552/1*NsEFlG16ksgDvJElljk_Qg.jpeg",
        id: "jackets",
        linkUrl: "shop/jackets",
      },
      {
        title: "sneakers",
        imageUrl:
          "https://i.pinimg.com/originals/7d/57/e9/7d57e969eda3a188ea547036a81924ef.jpg",
        id: "sneakers",
        linkUrl: "shop/sneakers",
      },
      {
        title: "womens",
        imageUrl:
          "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/03/05/10/istock-1137700343.jpg",
        id: "womens",
        linkUrl: "shop/womens",
      },
      {
        title: "mens",
        imageUrl:
          "https://manbodyspirit.com/wp-content/uploads/2019/07/Brothers.jpg",
        id: "mens",
        linkUrl: "shop/mens",
      },
    ],
  };
  render() {
    return (
      <div className={classes.Menu}>
        {this.state.departments.map((department) => {
          return (
            <MenuItem
              key={department.id}
              title={department.title}
              image={department.imageUrl}
              linkUrl={department.linkUrl}
              id={department.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Menu;
