import Notice from "@components/Notice";
import React from "react";

const PageNotice = () => {
  return (
    <div>
      <div>
        <Notice />
      </div>
    </div>
  );
};

export default React.memo(PageNotice);
