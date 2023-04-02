import { NavigationContainer } from '@react-navigation/native';
import {store} from './src/store/store'
import { Provider } from 'react-redux';
import MenuNavigation from './src/navigation/DrawNavigation/MenuNavigation'


export default function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MenuNavigation/>
      </NavigationContainer>
    </Provider>  
  );
}


