import React from "react";

function Title() {
    console.log('rendering Title');
    return (
        <h1>useCallback</h1>
    )
}

export default React.memo(Title);