import React, { useRef } from "react";
import { FiFilePlus } from "react-icons/fi";

import "./File.css";
function File() {
  const fileInputRef = useRef(null);

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <div className="card-file">
        <div className="file-head">
          <div className="file-title">
            <h1>Files/Documents</h1>
          </div>
          <div className="file-upload">
            {/* Use onClick to trigger the file input */}
            <div className="file-right">
              <p>
                <FiFilePlus color="rgb(26, 68, 194)"  size={"2rem"}/>
              </p>
              <p onClick={openFileInput}>Add files</p>
              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                style={{ display: "none" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default File;
