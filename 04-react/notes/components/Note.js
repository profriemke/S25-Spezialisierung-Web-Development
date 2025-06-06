export default function Note(props){
    return(
        <div className="bg-yellow-400 w-60 h-60 p-5 m-5 rounded shadow-xl">
            {props.text}
        </div>
    )
}