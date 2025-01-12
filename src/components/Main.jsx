import React from "react"
export default function Main() {
    const [memeArray,setMemeArray]=React.useState([])
    const[meme,setMeme] = React.useState({
        topText:"One does not simply",
        bottomText:"Walk into Mordor",
        url:"http://i.imgflip.com/1bij.jpg" 


    })
    function handleChange(event){
        const element = event.currentTarget
        setMeme(prevMeme=>{
            return {...prevMeme,
                [element.name]:element.value}
        })
    }
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes").then(res=>res.json()).then(data=>{
            console.log("use effect rendered")
            setMemeArray(data.data.memes)
            
        })

    },[])
    function getImage(){
        let ind= Math.floor(Math.random()*memeArray.length)
        const url = memeArray[ind].url
        
        setMeme(prevMeme=>({
            ...prevMeme,
            url:url
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                    />
                </label>
                <button onClick={getImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.url}/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}