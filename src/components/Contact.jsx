
function Contact(){
    return(
        <div className="contact_page composeElement">
            <form method="GET">
                <h2>Drop a Message to get in touch</h2>
                <input type="text" name="UserName" placeholder="Enter Your Full Name" id="contact_form_username"/>
                <input type="email" name="UserEmail" placeholder="Enter A Valid E-mail Address" id="contact_form_email" />
                <textarea name="UserMessage" placeholder="Type Your Message Here" id="contact_form_message" cols="30" rows={10}></textarea>
                <button name="submit" className="contact_form_submit">Send Message</button>
            </form>
        </div>
    )
}
export default Contact