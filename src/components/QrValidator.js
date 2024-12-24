import QrScanner from 'qr-scanner';
import { useState } from 'react';
import { MdQrCodeScanner } from "react-icons/md";

const QrValidator = ()=>{
    const [qrData,setQrData] = useState(null)
    const [scan, setScan] = useState(false)
    const scanQr =async ()=>{
        await setScan(true)
        const videoElem = document.getElementById("qrVideoScan")
        const qrScanner = new QrScanner(
            videoElem,
            result=>{
                console.log(result);
                setQrData(result.data);
                setScan(false)
                qrScanner.stop();
                qrScanner.destroy();
            },
            {highlightScanRegion:true,maxScansPerSecond:50}
        )
        qrScanner.start()
    }
    return (
        <div class="validator-container">
            {scan?<video height="300" id="qrVideoScan"></video>:null}
            {scan?null:<button onClick={scanQr}><MdQrCodeScanner class="scan-icon"/></button>}
            {qrData==null?null:<p>{qrData}</p>}
        </div>
    )
}

export default QrValidator