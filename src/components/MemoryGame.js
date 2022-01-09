import { useEffect, useState } from "react";
// import ProjectsList from "../components/ProjectsList";
import SingleCard from "../components/SingleCard";
import { useFetch } from "../hooks/useFetch";

//images
import notes from "../images/notes.jpg";
import saas from "../images/saas.jpg";
import stocks from "../images/stocks.jpg";
import portfolio from "../images/portfolio.jpg";

//styles
import "./MemoryGame.css";
import { useTheme } from "../hooks/useTheme";
import ProjectsList from "./ProjectsList";

const cardImages = [
  { src: notes, matched: false },
  { src: saas, matched: false },
  { src: stocks, matched: false },
  { src: portfolio, matched: false },
];

export default function MemoryGame() {
  const { data: projects, isPending } = useFetch(
    "http://localhost:3000/projects"
  );

  const { mode } = useTheme();
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showProjectList, setShowProjectList] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
      checkIfGameEnded();
    }
  }, [choiceOne, choiceTwo]);

  const checkIfGameEnded = () => {
    const cardsIsMatched = cards.filter((card) => {
      return !card.matched;
    });
    console.log("cardsIsMatched", cardsIsMatched);
    if (cardsIsMatched.length === 2) {
      setIsGameFinished(true);
      setShowMessage(true);
      setShowProjectList(false);
    }
  };
  setTimeout(() => {
    setShowMessage(false);
  }, 11000);

  setTimeout(() => {
    setShowProjectList(true);
  }, 10000);

  //reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  //start the game automatically
  useEffect(() => {
    shuffleCards();
  }, []);
  return (
    <>
      {!isGameFinished ? (
        <div>
          <button className={`button-game ${mode}`} onClick={shuffleCards}>
            New Game
          </button>

          <div className="card-grid">
            {cards.map((card) => (
              <SingleCard
                key={card.id}
                card={card}
                handleChoice={handleChoice}
                flipped={
                  card === choiceOne || card === choiceTwo || card.matched
                }
                disabled={disabled}
              />
            ))}
          </div>
          <p className={`turns ${mode}`}>Turns: {turns}</p>
        </div>
      ) : (
        <div></div>
      )}
      {showMessage && (
        <div className={`message ${mode}`}>
          Congrats, you won! Here are my projects: in 3, 2...
        </div>
      )}
      {showProjectList && isGameFinished && <ProjectsList />}
    </>
  );
}
