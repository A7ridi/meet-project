import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ShareIcon from "@mui/icons-material/Share";

const PostButton = styled(Button)(({ theme }) => ({
  color: "#14967b",
  borderColor: "#14967b",
  textTransform: "initial",
  // position: "absolute",
  top: "-20px",
  background: "#fff",
  "&:hover": {
    borderColor: "#bcf6ea",
    background: "#fff",
  },
}));
const ShareButton = () => {
  return (
    <div className="share-button">
      <PostButton variant="outlined">
        <ShareIcon sx={{ marginRight: 1 }} />
        Share
      </PostButton>
    </div>
  );
};

export default ShareButton;
