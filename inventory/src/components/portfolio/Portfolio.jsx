import "./portfolio.scss"
import Neigh from "../../assets/Neigh.png"
import ForkStraw from "../../assets/Forkstraw.png"

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
                        <img className="img neighImg" src={Neigh} alt="Neigh App Logo"/>
                    </div>
                    <div className="project crossed right">
                        <img className="img forkstrawImg" src={ForkStraw} alt="Fork straw logo Daniel He"></img>
                    </div>
                </div>
                <div className="right">
                    <div className="project crossed"></div>
                    <div className="project crossed right"></div>    
                </div>
            </div>
        </div>
    )
}
