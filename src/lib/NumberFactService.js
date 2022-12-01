import Onyx from 'react-native-onyx';
import ONYXKEYS from '../ONYXKEYS';
import {Alert} from 'react-native';

let timeoutID;

/**
 * Listen for changes to the NUMBER_FACTS Onyx key
 */
Onyx.connect({
  key: ONYXKEYS.NUMBER_FACTS,
  callback: val => showFacts(val),
});

/**
 * Fetch a fun fact about numbers
 * @returns {Promise<string>}
 */
function fetchNumberFact() {
  return fetch('http://numbersapi.com/random/trivia')
    .then(response => response.text())
    .catch(error => {
      console.error(error);
    });
}

/**
 * Gets and saves a number fact into the NUMBER_FACTS array
 */
function getAndSaveNumberFact() {
  fetchNumberFact().then(fact => {
    Onyx.merge(ONYXKEYS.NUMBER_FACTS, [fact]);
  });
}

/**
 * Shows an alert dialog to the user when a new number fact is found
 * @param facts
 */
function showFacts(facts) {
  if (!facts) {
    return;
  }

  Alert.alert('Number Facts', JSON.stringify(facts), [
    {onPress: () => clearTimeout(timeoutID)},
  ]);
}

/**
 * Starts a number fetching service to grab fun number facts
 */
export function startNumberFactService() {
  getAndSaveNumberFact();
  timeoutID = setTimeout(startNumberFactService, 7000);
}

/**
 * Clears the number facts
 */
export function clearNumberFacts() {
  Onyx.set(ONYXKEYS.NUMBER_FACTS, []);
}
