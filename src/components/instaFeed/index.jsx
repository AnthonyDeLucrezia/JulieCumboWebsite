import Feed from "react-instagram-authless-feed";
import React from "react";
import "./index.scss";

const InstaFeed = (props) => {
  const { className } = props;

  return (
    <div className={`app-insta-feed-container ${className}`}>
      <Feed
        userName="Jcortho"
        className="insta-feed"
        classNameLoading="Loading"
        limit="15"
      />
    </div>
  );
};

export { InstaFeed as default };
