import { NavigationContainer } from '@react-navigation/native';
import {store} from './src/store/store'
import { Provider } from 'react-redux';
import MenuNavigation from './src/navigation/DrawNavigation/MenuNavigation'
import Hero from './src/components/Hero/Hero';
import Register from './src/components/Register/Register';
import Index from './src/navigation/screens/Index';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <MenuNavigation/> */}
        {/* <Hero/> */}
<<<<<<< HEAD
        {/* <Register/> */}
        <Index/>
=======
        <Register/>
        {/* <Index/> */}
>>>>>>> 7523c8b5ed27a9a1737df7b6a011145a3caaa1d8
      </NavigationContainer>
    </Provider>  
  );
}


