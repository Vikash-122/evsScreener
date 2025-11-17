import PopUp from "../PopUp";

export default function StrategyBuilder() {
    return (
        <div>
            <div className="form-section" style={{width: "50%", margin: "10px", justifySelf: "center"}}>
                <div className="form-row">
                    <label >Strategy Type</label>
                    <input type="text"/>
                </div>
                <div className="form-row">

                    <label >Ticker</label>
                    <input type="text"/>
                </div>
            <PopUp title = "View Code"></PopUp>
            </div>
        </div>
    );
}