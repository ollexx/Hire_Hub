import React from "react";

import Job from "./ListCard";
import { JobCardsHoler } from "./listElements";

function ListComponent({ list }) {
  console.log(list);
  return (
    <JobCardsHoler>
      {list.map((item) => {
        return <Job item={item} />;
      })}
    </JobCardsHoler>
  );
}

export default ListComponent;
