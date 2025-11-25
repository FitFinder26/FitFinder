import styled from "styled-components";

export default function MagicButton({ processImage, isDisabled, name}){
    
    return(
        <Button onClick={processImage} disabled={isDisabled} buttonDisabled={isDisabled}>{name}
            <div>
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd"}} version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" ></path></g></svg>
            </div>
            <div>
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd"}} version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" ></path></g></svg>
            </div>
            <div>
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd"}} version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" ></path></g></svg>
            </div>
            <div>
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd"}} version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" ></path></g></svg>
            </div>
            <div>
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd"}} version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" ></path></g></svg>
            </div>
            <div>
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{shapeRendering: "geometricPrecision", textRendering: "geometricPrecision", imageRendering: "optimizeQuality", fillRule: "evenodd", clipRule: "evenodd"}} version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" ></path></g></svg>
            </div>
        </Button>
    )
} 

const Button = styled.button`
    position: relative;
    padding: 12px 35px;
    background: #FFFFFF;
    font-size: 17px;
    font-weight: 500;
    color: #000000;
    border: 3px solid #0e3a3a;
    border-radius: 8px;
    box-shadow: 0 0 0 #fec1958c;
    transition: all .3s ease-in-out;
    cursor: ${({buttonDisabled})=>!buttonDisabled && "pointer"};
    opacity: ${({buttonDisabled})=>buttonDisabled && "0"};
    
    div:nth-child(1){
        position: absolute;
        top: 20%;
        left: 20%;
        width: 25px;
        height: auto;
        filter: drop-shadow(0 0 0 #fffdef);
        z-index: -5;
        transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
    }
    div:nth-child(2){
        position: absolute;
        top: 45%;
        left: 45%;
        width: 15px;
        height: auto;
        filter: drop-shadow(0 0 0 #fffdef);
        z-index: -5;
        transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
    }

    div:nth-child(3){
        position: absolute;
        top: 40%;
        left: 40%;
        width: 5px;
        height: auto;
        filter: drop-shadow(0 0 0 #fffdef);
        z-index: -5;
        transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
    }

    div:nth-child(4){
        position: absolute;
        top: 20%;
        left: 40%;
        width: 8px;
        height: auto;
        filter: drop-shadow(0 0 0 #fffdef);
        z-index: -5;
        transition: all .8s cubic-bezier(0, 0.4, 0, 1.01);
    }

    div:nth-child(5){
        position: absolute;
        top: 25%;
        left: 45%;
        width: 15px;
        height: auto;
        filter: drop-shadow(0 0 0 #fffdef);
        z-index: -5;
        transition: all .6s cubic-bezier(0, 0.4, 0, 1.01);
    }

    div:nth-child(6){
        position: absolute;
        top: 5%;
        left: 50%;
        width: 5px;
        height: auto;
        filter: drop-shadow(0 0 0 #fffdef);
        z-index: -5;
        transition: all .8s ease;
    }
  
    &:hover {
    background: #0e3a3a;
    color: #FFFFFF;
    box-shadow: 0 0 25px #0e3a3a;
        border: 3px solid #FFF;
    }

    &:hover div:nth-child(1) {
    position: absolute;
    top: -80%;
    left: -30%;
    width: 25px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
    }

    &:hover div:nth-child(2) {
    position: absolute;
    top: -25%;
    left: 10%;
    width: 15px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
    }

    &:hover div:nth-child(3) {
    position: absolute;
    top: 55%;
    left: 25%;
    width: 5px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
    }

    &:hover div:nth-child(4) {
    position: absolute;
    top: 30%;
    left: 80%;
    width: 8px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
    }

    &:hover div:nth-child(5) {
    position: absolute;
    top: 25%;
    left: 115%;
    width: 15px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
    }

    &:hover div:nth-child(6) {
    position: absolute;
    top: 5%;
    left: 60%;
    width: 5px;
    height: auto;
    filter: drop-shadow(0 0 10px #fffdef);
    z-index: 2;
    }

    path{
        fill: #FFFDEF;
    }
    
`