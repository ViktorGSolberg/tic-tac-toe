import * as React from 'react';
import RegularButton from "../../Common/RegularButton";
import {fetchGameData} from "../../../backend/firebase";

const DownloadButton: React.FC = () => {

    return (
        <RegularButton onClick={fetchGameData}>
            Download Game
        </RegularButton>
    )
}

export default DownloadButton;
