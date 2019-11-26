import { RecentMatchesScreen } from '../components/RecentMatchesScreen'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const AppNavigator = createStackNavigator({
  RecentMatchesScreen
})

const NavigationContainer = createAppContainer(AppNavigator)

export default NavigationContainer
