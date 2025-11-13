export default function BacktestParameters(){
    return (
        <div className="backtest-grid">
           <div className="row">
             <label>From Date:</label>
             <input type="date" />
             <label>Switch Date for Data Source:</label>
             <input type="date" />
           </div>
           <div className="row">
             <label>To Date:</label>
             <input type="date" />
           </div>
         </div>
    )
}