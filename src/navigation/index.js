import { RecentMatchesScreen } from '../components/RecentMatchesScreen'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const AppNavigator = createStackNavigator(
  {
    RecentMatchesScreen
  },
  { headerLayoutPreset: 'center' }
)

const Router = createAppContainer(AppNavigator)

export default Router
