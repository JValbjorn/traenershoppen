export default function Kontakt() {
    return (
        <div className="flex flex-col "> 
        
            <article>
                <h1>Kontaktoplysninger</h1>
                <form>
                    <input type="tel" placeholder="Telefonnummer" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Telefon" />
                    <button type="submit">Send</button>
                </form>

            </article>
        </div>
    );

}