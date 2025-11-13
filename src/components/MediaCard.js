import "bootstrap/dist/css/bootstrap.css";

export default function Cards({ title, image, setLink, setPage, link, page }) {
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
          height: "70%",
          objectFit: "cover",
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px",
        }}
      />
      <div>
        <br />
        <p
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.3rem",
          }}
          onClick={() => {
            if (link !== undefined) {
              setLink(link);
              window.scrollTo({ top: 0, behavior: "smooth" })
              if(page === undefined){
                setPage("EmptyPage");
              }
              else{
                setPage(page)
              }
            }
            }
          }
        >
          {title}
        </p>
      </div>
    </div>
  );
}
