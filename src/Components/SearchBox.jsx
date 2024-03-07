
export default function SearchBox({ value, onSearch }) {
  return (
    <div>
      <p>Find contacts by name</p> 
      <input
        type="text"
        value={value}
        placeholder=""
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}


