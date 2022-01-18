import "./portfolio.scss"
import Neigh from "../../assets/Neigh.png"
import ForkStraw from "../../assets/Forkstraw.png"
import Stack from "../../assets/Stack.png"

export default function Portfolio() {
    return (
        <div className = "portfolio" id="portfolio">
            <div className="portfolioHeader">
                <div>Projects</div>
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
                    <div className="project crossed">
                        <img className="img stackImg" src={Stack} alt="Stack USC Smart Farming Daniel He"></img>
                        <h2 className="projectTitle">Trojan-based Smart Farming</h2>
                        <h4 className="projectDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolore amet perferendis hic voluptatibus assumenda reiciendis architecto atque. Deleniti debitis alias illum perspiciatis magni, nihil velit temporibus recusandae inventore sed?</h4>
                    </div>
                    <div className="project crossed right"></div>    
                </div>
            </div>
        </div>
    )
}
