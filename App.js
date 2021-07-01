import React from 'react';
import './App.css';

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: '🙂',
    name: "Slightly Smiling Face"
  },
  {
    emoji: '🎉',
    name: "party popper"
  },
  {
    emoji: '💃',
    name: "woman dancing"
  },
  {
    emoji: '😇',
    name: "Blessed"
  },
  {
    emoji: '🤩',
    name: "Star-Struck"
  }
];

function App() {
  const greeting = "greeting";
  const displayAction = false;
  return(
    <div className="container">
      <h1 id={greeting}>WLCOME TO EMOJI WORLD</h1>
      {displayAction && <p>I am writing JSX</p>}
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;