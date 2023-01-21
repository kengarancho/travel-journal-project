
export default function Content(props) {
    return (
        <main>
            <img src={props.detail.img} alt="country-pic" className="card--image" />
            <div class="main--content">
                <div className="title--country"><h4>{props.detail.location.toUpperCase()}</h4><a href="#"><span>{props.detail.map}</span></a></div>
                <h2 className="place--country">{props.detail.place}</h2>
                <p className="dates"><strong><span className="sdate">{props.detail.startdate} - </span><span className="edate">{props.detail.enddate}</span></strong></p>
                <p>{props.detail.description}</p>
            </div>
        </main>
    )
}