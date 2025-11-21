import "bootstrap/dist/css/bootstrap.css";
import {Link} from "react-router-dom";
export default function Cards({ title, image, link, page, setPage }) {
  return (
    <div
      style={{
        width: "340px",
        height: "250px",
        borderRadius: "30px",
        marginLeft: "40px",
        marginRight: "40px",
        backgroundColor: "white",
      }}
      className="media-card"
    >
      <img
        src={image}
        alt="..."
        style={{
          overflow: "hidden",
          width: "100%",
          height: "80%",
          objectFit: "cover",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
        }}
      />
      <div>
        
        <Link to = {link} className="link">
        <p
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.3rem",
            height:"20%",
            padding:"8px"
            
            
          }}
          onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" })
              if(page === undefined){
                setPage("EmptyPage");
              }
              else{
                setPage(page)
              }
            }
          }
        >
          {title}
        </p>
        </Link>
      </div>
    </div>
  );
}
