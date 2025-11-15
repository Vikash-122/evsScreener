import React from "react";
import styles from "./Backtesting.module.css"; // We'll create this CSS file

export default function Backtesting() {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Analytics</h1>

                <h2>Select Benchmark Index</h2>
                <label style={{marginTop:"20px"}} >Select Index</label>
                <select className={styles.dropdown}>
                    <option value="">Choose an option</option>
                    <option>XYZ INDEX</option>
                    <option>ABC INDEX</option>
                    <option>CDE INDEX</option>
                    <option>DEF INDEX</option>
                </select>

                <h2 style={{marginTop:"20px"}}>Select Metrics</h2>
                <form className={styles.metricsform}>
                    <div className={styles.checkboxgroup}>
                        <input type="checkbox" id="annualizedReturn" name="annualizedReturn" defaultChecked/>
                        <label htmlFor="annualizedReturn">Annualized Return</label>
                    </div>

                    <div className={styles.checkboxgroup}>
                        <input type="checkbox" id="riskAdjustedReturn" name="riskAdjustedReturn"  defaultChecked />
                        <label htmlFor="riskAdjustedReturn">Risk Adjusted Return</label>
                    </div>

                    <div className={styles.checkboxgroup}>
                        <input type="checkbox" id="sortino" name="sortino" defaultChecked />
                        <label htmlFor="sortino">Sortino Ratio</label>
                    </div>

                    <div className={styles.checkboxgroup}>
                        <input type="checkbox" id="annualizedVolatility" name="annualizedVolatility" defaultChecked />
                        <label htmlFor="annualizedVolatility">Annualized Volatility</label>
                    </div>

                    <div className={styles.checkboxgroup}>
                        <input type="checkbox" id="informationRatio" name="informationRatio"  defaultChecked/>
                        <label htmlFor="informationRatio">Information Ratio</label>
                    </div>

                    <div className={styles.checkboxgroup}>
                        <input type="checkbox" id="sharpeRatio" name="sharpeRatio" defaultChecked />
                        <label htmlFor="sharpeRatio">Sharpe Ratio</label>
                    </div>

                    <div className={styles.checkboxgroup}>
                        <input type="checkbox" id="trackingError" name="trackingError"  defaultChecked/>
                        <label htmlFor="trackingError">Tracking Error</label>
                    </div>
                    <div className={styles.checkboxgroup}>
                        <input type="checkbox" id="AnnualizedRisk" name="AnnualizedRisk"  defaultChecked />
                        <label htmlFor="AnnualizedRisk">Annualized Risk</label>
                    </div>
                    <div className={styles.checkboxgroup}>
                        <input type="checkbox" id="256_max_drawdown" name="256_max_drawdown"  defaultChecked/>
                        <label htmlFor="256_max_drawdown">256 Max DrawDown</label>
                    </div>
                    
                        <button type="submit" className={styles.submitbtn}>Submit</button>
                    
                    
                </form>
            </div>
        </>
    );
}
