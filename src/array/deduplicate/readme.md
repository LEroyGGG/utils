## array.deduplicate

Create dictionary object and check is key with taken id exists in it.

```javascript
import { deduplicate } from '@utils/array/deduplicateUsingMap';
```

### Usage

```javascript
deduplicate(array[, getId = v => v])
```

**Params:**

* **array**: T[] - array of values
* **getId**: (v: T) => number | string _[default: v => v]_ - function returns item id

**Return:**

* T[] - array of uniq values

#### Example

```javascript
const list = [
  { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 },
  { value: 2 }, { value: 3 }, { value: 3 },
];

const comparator = (v) => v.value;

deduplicate(list, comparator);
```

#### Result

```json
[{ "value": 1 }, { "value": 2 }, { "value": 3 }, { "value": 4 }]
```