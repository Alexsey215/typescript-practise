import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import {getFavoritesAmount, getUserData} from "./helpers/get-data.js";
import {getTodosByCount} from "./todosByCount.js";

const ls = window.localStorage;
const userData = {
  username: 'Wade Warren',
  avatarUrl: '../img/avatar.png'
}
ls.setItem('user', JSON.stringify(userData));
ls.setItem('favoritesAmount', '2');

window.addEventListener('DOMContentLoaded', () => {
  getTodosByCount(5)
  renderUserBlock(getUserData().username as string, getUserData().avatarUrl as string, getFavoritesAmount() as number)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})

