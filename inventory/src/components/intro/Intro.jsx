import "./intro.scss"
import banana from '../../res/banana.png'

export default function intro() {
    return (
        <div className = "intro" id="intro">
            <div className = "wrapper">
                <div className="desc">
                    USC Computer Science & Design 
                </div>
                <div className="name">I catch your</div>
                <div className="name">monkey wrenches</div>
                <div className="name">
                    <div className="nameWrapper">
                        <div className="text">{'>'}{'>'} Hi, I'm d</div>
                        <div className="text carrot">^</div>
                        <div className="text niel">niel.</div>
                    </div>
                </div>
                <div className="monkeybox">
                    <div className="leftflap">

                    </div>
                    <div className="rightflap">
                    </div>
                    <div className="rightside">        
                    </div>
                    <div className="topleftflap">

                    </div>
                    <div className="toprightflap">

                    </div>
                    <div className="center">
                    </div>
                    <div>
                        <img className="banana" src={banana} alt="banana"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
