import Thumbnail from "./Thumbnail"

function Results({results}) {
  return (
    <div>
      {results.map(result =>(
        <Thumbnail key={result} result={result}/>
      ))}
    </div>
  )
}

export default Results
