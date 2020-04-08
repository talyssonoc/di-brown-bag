# Dependency injection

- O que é?

```js
// antes
import saveUser from './saveUser';
const createUser = async (userData) => {
  const user = await  saveUser(user)
  return user
}

// ---

// depois
const createUser = ({ saveUser }) => async (userData) => {
  const user = await saveUser(user)
  return user
}
```

```rb
# antes
require './user_database.rb' # ou através do autoload
class CreateUser
  def call(user_data)
    # user_database é importado
    UserDatabase.save(user_data)
  end
end

# ---

# depois
class CreateUser
  def initialize(user_database:)
    @user_database = user_database
  end

  def call(user_data)
    # user_database é recebido como parâmetro
    @user_database.save(user_data)
  end
end
```

- Vantagens
  - Desacopla implementação de interface (Dependency Inversion Principle -> SOLID)
  - Torna mais fácil modificar uma implementação e de mudar a organização dos arquivos
  - Mais fácil de testar, principalmente com testes unitários

- Desafios / Desvantagens
  - Necessário usar factories/classes para as dependências [JS]
  - Se você não tem costume, pode parecer desnecessário ou mágico demais
  - Em alguns **poucos** casos é overkill

## Dependency injection com JS

### Container manual

- Vantagens
  - Não precisa incluir uma biblioteca nova
  - Tudo é construído logo que o app é iniciado
  - Menor quantidade de "mágica" possível
  - Facilmente usável tanto no backend quanto no frontend

- Desvantagens
  - Tudo é construído **estaticamente** logo que o app é iniciado
  - Pouco flexível
  - Pode ser cansativo adicionar novas dependências ao container

### Container DIY

- Vantagens
  - Não precisa incluir uma biblioteca nova
  - As dependências são construídas dinamicamente quando acessadas
  - Código menos verboso e mais automático
- Desvantagens
  - Não  faz caching de de dependências
  - Como todo approach manual, seu time tem que dar manutenção
  - 

### Container com Awilix

- Vantagens
- Desvantagens

### Onde usar

- Node + middleware (Express, Koa, Hapi, ...) -> http://npmjs.com/package/awilix-express
- Redux + Redux-thunk -> https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
- Vue + Vue mixin -> https://markus.oberlehner.net/blog/dependency-injection-in-vue-applications/

## Dependency injection com Ruby

- Container manual e DIY tem approaches similares ao JS

### dry-container + dry-auto_inject

- Vantagens
  - Approach robusto e flexível
  - Independente de framework web usado
  - Possui um beta para integração com Rails (https://dry-rb.org/gems/dry-rails/0.1/)
  - É parte da suite dry-rb, com vários outros pacotes compatíveis
  - Apesar da primeira das desvantagens listada, o setup pode ser facilitado utilicando convention-over-configuration

- Desvantagens
  - Exige setup
  - Alguns pessoas acham DI em Ruby desnecessário (e elas possivelmente estão erradas 🔥)
