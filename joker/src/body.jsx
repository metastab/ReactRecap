
import React from "react"

export default function Body() {

    const [keywords, setKeywords] = React.useState([]);

    const keyword_list = keywords.map((keyword)=>{
        return (
            <li key={keyword}>
                {keyword}
            </li>
        )
    })

    function handleSubmit(formData) {
        const newKeyword = formData.get("keywords");

        //empty check
        if (newKeyword === ""){
            return
        }

        //add newKeyword to the array
        setKeywords((prevKeywords)=>{
            return(
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
                <button>Type keywords</button>
            </form>

            <ul id="keyword-list" >
                {keyword_list}  
            </ul>
        </main>
    )
}