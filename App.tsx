import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { TareaScreen } from './src/screens/TareaScreen'
// import { FlexScreen } from './src/screens/FlexScreen'
// import { PositionScreen } from './src/screens/PositionScreen'
// import { ContadorScreen } from './src/screens/ContadorScreen'
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen'
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { DimensionesScreens } from './src/screens/DimensionesScreens';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HolaMundoScreen /> */}
      {/* <ContadorScreen/> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreens/> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  )
}

export default App