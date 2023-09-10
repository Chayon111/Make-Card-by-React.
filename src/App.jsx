
import './App.css';
import Card from "./Card";

function App() {
  const cards = [
    {id: 1, title: "Card 1", content: "Content 1"},
    {id: 2, title: "Card 2", content: "Content 2"},
    {id: 3, title: "Card 3", content: "Content 3"},
    {id: 4, title: "Card 4", content: "Content 4"},
    {id: 5, title: "Card 5", content: "Content 5"},
    {id: 6, title: "Card 6", content: "Content 6"},
  ];

  return (
    <>
    <div className="card-container">
      {cards.map( (card) => {
        return(
          <div  key={card.id} >
             <Card title={card.title} content={card.content}/>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default App
