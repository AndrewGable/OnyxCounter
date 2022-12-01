## OnyxCounter 🧮

Example application to demonstrate how to use [`react-native-onyx`](https://github.com/Expensify/react-native-onyx).

iOS| Android                                                  
---|----------------------------------------------------------
| <img width="400" src="https://i.imgur.com/a91VLNp.png" /> | <img width="400" src="https://i.imgur.com/13MrlA0.png" /> |

## How to run
### iOS 🍎
1. Install dependencies: `npm install && cd ios && pod install && cd ..`
2. Start the simulator, metro, and boot the app: `npm run ios`

### Android 🤖
1. Install dependencies: `npm install`
2. Start the emulator, metro, and boot the app: `npm run android`

## Examples
1. Onyx persists data to disk
    - This is made clear by the difference in `<StateCounter />` vs `<OnyxCounter />` when you kill the app
    - State is only kept in memory, Onyx saves data to the disk (via [`AsyncStorage`](https://github.com/react-native-async-storage/async-storage))
2. UI binds to data via state/props
   - Onyx has a [higher-order component (HOC)](https://reactjs.org/docs/higher-order-components.html) named `withOnyx` that binds the UI to changes in Onyx. When the data changes in Onyx, the component will re-render these changes.
3. When should you use `withOnyx` HOC or `Onyx.connect`?
   - React components should use `withOnyx()` 
   - Non-React libraries should use `Onyx.connect()`
4. Different Onyx methods
   - `set()` - See `clearNumberFacts()`
   - `merge()` - See `getAndSaveNumberFact()`
   - `mergeCollection()` - see `mergeCatAndDogFacts()`
