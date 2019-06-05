import React from "react";
import moment from "moment";
const ListRender = ({ props }) => {
  console.log(props);
  return props.map(item => (
    <h1 key={item.ID}>
      Name: {item.name} Date Joined:{moment(item.date_joined).format("MMM Do, YY")}
    </h1>
  ));
};

export { ListRender as default };
