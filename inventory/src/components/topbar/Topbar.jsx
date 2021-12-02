import "./topbar.scss"
import Line from "../line/Line"

export default function Topbar() {
    return (
        <div className = "topbar">
            <div className = "wrapper">
                <div className="left">
                    <a href="#intro" className="logo">^</a>
                </div>
                <div className="right">asdf
                    <Line></Line>
                </div>
            </div>
        </div>
    )
}
