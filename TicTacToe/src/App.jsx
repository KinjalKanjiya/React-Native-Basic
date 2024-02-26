import React from 'react'
import { useState } from 'react'
import {View, SafeAreaView, Text , StatusBar , StyleSheet, FlatList, Pressable} from  'react-native'
import Snackbar from 'react-native-snackbar'
import Icons from './components/Icons'
function App(){
  const [isCross , SetIsCross] = useState(false)
  const [gamewinner , setGameWinner] = useState('')
  const [gameState , setGameState] = useState(new Array(9).fill('empty',0,9))

  const reloadGame =() =>{
    SetIsCross(false);
    setGameWinner('');
    setGameState(new Array(9).fill('empty',0,9))
  }
  const checkIsWinner = () => {
    //  checking  winner of the game
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game! 🥳`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw game... ⌛️');
    }
  }

  const onChangeItem = (itemNumber) =>{
    if(gamewinner){
      return Snackbar.show({
        text: 'Game over. Start a new game!',
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: '#FAC42F', 
      textColor: '#FFFFFF', 
      textAlign: 'center', 
     
      }) 
    }
    if(gameState[itemNumber] === 'empty'){
      gameState[itemNumber] = isCross ? 'cross':'circle'
      SetIsCross(!isCross)
    }else{
      return Snackbar.show({
        text: 'Position is already filled',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'red', 
        textColor: '#FFFFFF', 
        textAlign: 'center', 
      })
    }
    checkIsWinner()
  }

  return(
    <SafeAreaView  style={styles.container}>
      { gamewinner ? (
        <View  style={[styles.playerInfo ,styles.winnerInfo ]}>
          <Text style={styles.winnerTxt}>{gamewinner}</Text>
        </View>
      ) : (
        <View style={[styles.playerInfo , isCross ? styles.playerX : styles.playerO]}>
          <Text style={styles.gameTurnTxt}>Player {isCross ? 'X' : 'O'}'s  Turn</Text>
        </View>
      )}
      {/* Game Grid */}
      <FlatList
      numColumns={3}
      data={gameState}
      style={styles.grid}  
      renderItem = {({item, index}) =>(
        <Pressable key={index} style={styles.card} onPress={() =>onChangeItem(index)}>
          <Icons name={item}/>
        </Pressable>
      )}
        />
      {/* game action */}
      <Pressable style={styles.gameBtn} onPress={reloadGame}>
        <Text style={styles.gameBtnText}>
          {gamewinner ? 'Start new game':'Reload the game'}
        </Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000000'
  },
  playerInfo: {
    height: 56,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,

    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: '33.33%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#333',
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',

    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',
    marginBottom:'90%',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#8D3DAF',
  },
  gameBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
})
export default App