import React from "react";

import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px"
    }}>
      <Bars
        height={80}
        width={80}
        radius={5}
        color="#fcba03"
        ariaLabel="bars-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
