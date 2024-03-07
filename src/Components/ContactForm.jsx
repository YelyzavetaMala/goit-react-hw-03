
export default function ContactForm({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    onAdd({ id: Date.now(), name, number });
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Name</p>      
        <input type="text" name="name" placeholder="" />
              
        <p>Number</p>  
        <input type="tel" name="number" placeholder="" />
              
        <button type="submit">Add contact</button>
      </form>
    </div>
  )
}

