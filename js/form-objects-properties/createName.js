import { getRandomItemFromArray } from './functionsForArray/getRandomItemFromArray.js.js';
import { variantsOfNames } from '../variables/formVariables.js';

const createName = () => getRandomItemFromArray (variantsOfNames);

export {createName};