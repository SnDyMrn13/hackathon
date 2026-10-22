
function RecordCard({ record }){
    return (
        <article>
            <h2>{record.Name}</h2>
            <p>{record.Diet} </p>
        </article>
    )
}

export default RecordCard