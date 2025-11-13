export default function Sidebar({ page, setPage, setLink }) {

    // ✅ Sidebar data kept INSIDE this component
    const data = [
        { name: "Home", type: "tab" },
        { name: "Design New Strategy", type: "tab" },

        // ✅ Your new items
        { name: "Onboard New Index", type: "tab" },
        { name: "Daily Calculations", type: "tab" },
        { name: "Rebalance", type: "tab" },
        { name: "Data Management", type: "tab" },
        { name: "Analytics", type: "tab" },
        { name: "Batch Scheduler", type: "tab" }
    ];

    return (
        <div className="Sidebar">
            <ul className="Sidebar-list">
                {data.map((ele) => (
                    <div key={ele.name} className="side-item">
                        <li
                            className={`sidebar-${ele.type} row`}
                            onClick={() => setPage(ele.name)}
                        >
                            {ele.name}
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}
