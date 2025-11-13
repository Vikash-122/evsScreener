export default function SidebarIndexTools({ page, setPage }) {

    const data = [
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
                {data.map(ele => (
                    <li 
                        key={ele.name}
                        className={`sidebar-${ele.type} row`}
                        onClick={() => setPage(ele.name)}
                    >
                        {ele.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
