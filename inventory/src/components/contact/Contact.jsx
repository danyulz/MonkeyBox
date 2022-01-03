import "./contact.scss"

export default function Contact() {
    return (
        <div className = "contact" id="contact">
            <div className="content">
                <div className="tag">Contact</div>
                <div className="interested">Interested?</div>
                <div className="emailbox">
                    <div className="mail">
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M.254 10.188H15.12V.438H.254v9.75zm2.403-8.635h10.075L7.72 4.923l-5.062-3.37zm-1.287.484l6.352 4.228 6.283-4.222v7.03H1.37V2.037z" fill="#FFFFFF" fill-rule="evenodd"></path></svg>
                    </div>
                    <div className="email">d@nielhe.com</div>
                </div>
            </div>
        </div>
    )
}
    