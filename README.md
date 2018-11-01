# simple-clipboard

## api
```
import clipboard from 'simple-clipboard';

const btn = document.getElementById('btn');

btn.onclick = function() {
  const result = clipboard('hello world');
  console.log(`copy ${result}`);
};
```

