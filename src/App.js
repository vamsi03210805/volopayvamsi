import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {useState} from 'react'
import AddItems from './context/AddItems'

import All from './components/All'
import Your from './components/Your'
import BlockCards from './components/BlockCards'

import Header from './components/Header'

import './App.css'

const App = () => {
  const [blockCards, setBlockCards] = useState([])

  const addBlockLists = each => {
    setBlockCards(prevValue => [...prevValue, each])
  }

  return (
    <div className="app-main">
      <BrowserRouter>
        <AddItems.Provider
          value={{
            blockCards,
            addBlockList: addBlockLists,
          }}
        >
          <Header />
          <Switch>
            <Route exact path="/all" component={All} />
            <Route exact path="/your" component={Your} />
            <Route exact path="/block" component={BlockCards} />
          </Switch>
        </AddItems.Provider>
      </BrowserRouter>
    </div>
  )
}
export default App
