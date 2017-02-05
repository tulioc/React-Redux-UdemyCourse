### Reducers

É uma função que retorna uma parte do state do seu APP. Os Reducers
são responsáveis pela manipulação do state do seu APP.

#### Representação básica

```JavaScript
(previousState, action) => newState
```

Coisas que você **não** deve fazer dentro de um reducer:

* Mutar seus argumentos
* Realizar call de alguma API ou fazer roteamento de transições.
* Utilizar funções 'não puras'.

### Containers
É um componente que faz a conexão com redux. No caso do React, usa-se a biblioteca chamada react-redux.

Para estabelecer uma conexão com o redux, é necessário utilizar duas funções:

```JavaScript
mapStateToProps(state) {
  return {
    name: state.name // nome escolhido dentro do rootReducer
  };
}
```

Tudo o que for retornado pela função mapStateToProps será considerado props do componente.


```JavaScript
export default connect(mapStateToProps)(ComponentName);
```

A função connect é a responsável por finalizar essa conexão, entre a função mapStateToProps e o componente.


### Actions

#### Actions Creators

Funções que retornam um objeto com duas propriedades: `type` e `payload`.

##### Exemplo:

```JavaScript
export function selectBook(book) {
  const BOOK_SELECTED = 'BOOK_SELECTED';
  return {
    type: BOOK_SELECTED,
    payload: book
  };
}
```

#### Reducer(ActionReducer)
É necessário ter uma reducer para 'gerenciar' o estado da aplicação. Um reducer responsável por uma action, irá receber o pedaço de state e uma action, e irá retornar outra state.

##### Exemplo:

```JavaScript
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state
}
```

#### Container & Actions

Para integrar um container com uma action é necessario utilizar a função `mapDispatchToProps()`  importar ` bindActionCreators ` da biblioteca do redux e o Action Creator.

#### Exemplo:

```JavaScript
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

```

### React Router

#### Configuração:

É necessario importar `import { Router, browserHistory } from 'react-router';'` utilizar um componente específico para dar render nas suas rotas: `<Router history={browserHistory} routes={routes} />` e criar suas rotas em um arquivo separado.

#### Exemplo:

```JavaScript
import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';

export default (
  <Route path="/" component={App} />
);

```

#### Nesting Routes
#### Exemplo:

```JavaScript
export default (
  <Route path="/" component={App} >
    <Route path="greet" component={Greeting} />
  </Route>
);

```


### Extras

#### Redux Promise & Axios

Axios é uma biblioteca para fazer requisição, e o promise é um middleware para lidar com a resposta da requisição
antes que chegue aos reducers.

Para installar `npm install --save axios redux-promise`

A configuração do promise deve ser feita para que o app saiba que é um middleware

#### Exemplo:

```JavaScript
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

```

Uma requisição deve ser feita por uma action.

#### Exemplo:

```JavaScript
import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=frnuisohflsiasihd';
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

```
#### How&When to Fetch DATA

* O usuário clica em algum botão, isso chama uma action que faz a requisição e produz um novo state.

* Quando a url muda, você chama uma action que faz a requisição e produz um novo state.

#### Life Cycle Method

#### Redux Form


* **ComponentWillMount:**
