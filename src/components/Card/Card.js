import { useState } from "react";
export const Card = ({
  deleteCard,
  data: {
    _id,
    title,
    createdAt,
    user: { userName },
    description,
    status,
    importance,
  },
}) => {
  const [showMore, SetShowMore] = useState(false);
  const dateTime = new Date(createdAt).toLocaleString() + " hs.";

  const limitString = (str) => {
    if (str?.length > 370)
      return { string: str.slice(0, 167).concat("..."), addButton: true };
    return { string: str, addButton: false };
  };

  return (
    <div className="card">
      <div
        className="close"
        onClick={() => {
          deleteCard(_id);
        }}
      >
        {" "}
        closex
      </div>
      <h3>{title}</h3>
      <h6>{dateTime}</h6>
      <h5>{userName}</h5>
      <button className={status.toLowerCase()} type="button">
        {status.toLowerCase()}
      </button>
      <button className={importance.toLowerCase()} type="button">
        {importance.toLowerCase()}
      </button>
      {!showMore && <p>{limitString(description).string}</p>}
      {showMore && (
        <>
          <p>{description}</p>{" "}
          <button
            type="button"
            onClick={() => {
              SetShowMore(false);
            }}
          >
            ver menos
          </button>
        </>
      )}
      {!showMore && limitString(description).addButton && (
        <button
          type="button"
          onClick={() => {
            SetShowMore(true);
          }}
        >
          Ver mas
        </button>
      )}
    </div>
  );
};
