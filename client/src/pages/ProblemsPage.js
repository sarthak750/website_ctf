import React, { useState } from "react";
import Slidebar from "../layout/Slidebar";
import Allquestion from "../layout/Allquestion";
import Navbar from "../layout/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

export default function ProblemsPage({ category }) {
  return (
    <div>
      <Navbar />
      <Slidebar
        // add links
        style={{}}
      />
      <div style={{ marginLeft: 100, marginTop: 40 }}>
        <Allquestion category={category} />
      </div>
    </div>
  );
}
