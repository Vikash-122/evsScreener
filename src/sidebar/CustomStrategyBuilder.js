import "./CustomStrategyBuilder.css";
import StockSelectionParameters from "./CSB/StockSelectionParameters";
import FactorSelection from "./CSB/FactorSelection";
import WeightCalculationMethod from "./CSB/WeightCalculationMethod";
import ViewFilteredData from "./CSB/ViewFilteredData";
import WeightsOptimization from "./CSB/WeightsOptimization";

const CustomStrategyBuilder = () => {
  return (
    <div className="custom-strategy-container">
      <h2 className="cust-title">Custom Strategy Builder</h2>

        <h3>Stock Selection Parameters</h3>
        <StockSelectionParameters />
        <ViewFilteredData />
          <FactorSelection />
          <WeightCalculationMethod />
        <h3>Weights Optimization</h3>
        <WeightsOptimization />

      <button className="create-btn">Create Strategy</button>
    </div>
  );
};

export default CustomStrategyBuilder;