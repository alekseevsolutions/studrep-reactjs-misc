import './App.css'

function App() {

  return (
      <>
        <div>
            <p>Hi there!</p>
        </div>
        <Text display_text="What's up?"/>
        <Text display_text="What's up, dog???"></Text>
      </>
  )
}

function Text({display_text}) {
    return (
        <div>
            <p>{display_text}</p>
        </div>
    )
}

export default App
