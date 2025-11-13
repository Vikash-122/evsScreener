

export default function BacktestParameters(){
    return (
        <div className="backtest-grid">
           <div className="row">
             <label>From Date:</label>
             <input type="date" />
             <label>Data Sufficiency Check:</label>
             <input type="text" placeholder="check" />
           </div>
           <div className="row">
             <label>To Date:</label>
             <input type="date" />
             <label>Switch Date for Data Source:</label>
             <input type="date" />
           </div>
         </div>
    )
}