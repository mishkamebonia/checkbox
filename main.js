import Data from './users.json' assert { type: 'json' }

import {createCard} from './card.js'

import {filterItems} from './filter.js'

createCard(Data)

filterItems(Data)