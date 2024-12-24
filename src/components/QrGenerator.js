import { useState } from "react";
import QRCode from "qrcode"
import { saveAs } from 'file-saver'

const QrGenerator = ()=>{
    const [qrUrl,setQrUrl] = useState('');
    const [qrData,setQrData] = useState('');
    const toSaveQr = ()=>{
        saveAs(qrUrl, 'image.jpg')
    }
    const onChangeData = event=>{
        setQrData(event.target.value);
    }
    const onClickGenerate = (event)=>{
        event.preventDefault()
        QRCode.toDataURL(qrData)
        .then(url=>{
            console.log(url)
            setQrUrl(url)
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div class="generator-container">
            <form onSubmit={onClickGenerate}>
                <div class="mb-3">
                    <label htmlFor="qr-input-data" class="form-label">Enter Input Data</label>
                    <input id="qr-input-data" class="form-control" type="text" placeholder="QR DATA" onChange={onChangeData}/>
                </div>
                <button type="submit" class="btn btn-primary">generate</button>
            </form>
            {qrUrl===''?null:(
                <div class="qr-generated">
                    <img class="qr-image" src={qrUrl} alt="qr-code"/>
                    <button type="button" class="btn btn-success save-button" onClick={toSaveQr}>save</button>
                </div>
            )}
        </div>
    )
}

export default QrGenerator