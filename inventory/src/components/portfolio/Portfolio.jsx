import "./portfolio.scss"
import Neigh from "../../assets/Neigh.png"

export default function Portfolio() {
    return (
        <div className = "portfolio" id="portfolio">
            <div className="portfolioHeader">
                <div>Portfolio</div>
                <div>&&nbsp;Works</div>
            </div>
            <div className="object">
                <div className="left">
                    <div className="project crossed">
                        <div className="img">
                            <img className="neighImg" src={Neigh} alt="Neigh App Logo"/>
                        </div>
                    </div>
                    <div className="project crossed right"></div>
                </div>
                <div className="right">
                    <div className="project crossed"></div>
                    <div className="project crossed right"></div>    
                </div>
            </div>
        </div>
    )
}
