import Hero from './src/components/Hero/Hero';
import { NavigationContainer } from '@react-navigation/native';
import {store} from './src/store/store'
import { Provider } from 'react-redux';


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Hero/>
      </NavigationContainer>
    </Provider>  
  );
}


