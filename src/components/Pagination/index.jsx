import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import "./index.scss";

const appPagination = (props) => {
  const { items, onPageChange } = props;
  const [active, setActive] = useState(1);

  const onPageClick = (page) => {
    setActive(page);
    onPageChange(page);
  };
  return (
    <Pagination className="pagination-container">
      {items.map((x) => (
        <Pagination.Item
          key={x}
          active={x === active}
          onClick={() => onPageClick(x)}
        >
          {x}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export { appPagination as default };
