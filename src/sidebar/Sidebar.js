import {allData} from './sidebarData'

export default function Sidebar({page, setPage, setLink, link}){
    const data = allData.filter(ele => ele.link === link)
    return(
        <div className="Sidebar">
            <ul className="Sidebar-list">
                {
                    data.map(ele => 
                        (<div className='side-item' key={`${ele.name}-${ele.type}`}>
                            <li className= {`sidebar-${ele.type} row`} onClick={()=>setPage(ele.name)}>
                                {`${ele.name}`}
                            </li>
                        </div>)
                    )
                }
            </ul>
        </div>
    )
}