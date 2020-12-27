import React from "react";
import liked from "../../assets/liked.png";
import unliked from "../../assets/unliked.png";

const LikeHearts = props => {
    return (
        <div>
            <img src={liked} alt={"liked"} height="20px" width="20px" />
        </div>
    )
}

export default LikeHearts;