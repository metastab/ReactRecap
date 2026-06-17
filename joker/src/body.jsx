
import React from "react"

export default function Body() {

    const [keywords, setKeywords] = React.useState(["banana", "sugar"]);

    const keyword_list = keywords.map((keyword) => {
        return (
            <li id="typed-keywords" key={keyword}>
                {keyword}
            </li>
        )
    })

    function handleSubmit(formData) {
        const newKeyword = formData.get("keywords");

        //empty check
        if (newKeyword === "") {
            return
        }

        //add newKeyword to the array
        setKeywords((prevKeywords) => {
            return (
                [...prevKeywords, newKeyword]
            )
        })
    }

    return (
        <main>
            <form action={handleSubmit} className="keyword-form">
                <input
                    type="text"
                    placeholder=" eg. rain"
                    aria-label="keywords"
                    name="keywords"
                />
                <button>+ Type keywords</button>
            </form>

            {/* will be using conditional rendering here */}

            {keywords.length < 3 &&
                <h5 id="min-items-warning">please provide atleast 4 ingredients!</h5>}

            <section>
                <h2 id="form-header">Current keywords</h2>
                <ul id="keyword-list" > {keyword_list} </ul>

                {keywords.length >= 3 &&
                    <div className="get-keyword-container">
                        <div>
                            <h3>Ready for a joke?</h3>
                            <p>Generate a joke from your list of keywords.</p>
                        </div>
                        <button>🎭 Get a Joke.</button>
                    </div>}

            </section>

        </main>
    )
}