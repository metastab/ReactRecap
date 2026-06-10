export default function Contacts(props) {
    //console.log(props)

    let src = props.img;
    let name = props.name;
    let phone = props.phone;
    let email = props.email;

    return (
        <article className = 'contact-card'>

            <img className='profile' src={src} alt={name} />

            <h2>{name}</h2>

            <div className="info-group">
                <img src="/images/phone-icon.png" alt="phone" width="13" height="13" />
                <p>{phone}</p>
            </div>

            <div className="info-group">
                <img src="/images/mail-icon.png" alt="mail" width="15" height="15"/>
                <p>{email}</p>
            </div>

        </article>
    )
}