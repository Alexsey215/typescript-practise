import { renderBlock } from './lib.js'
import {getDateString, getNextMonthLastDay, getPlusTwoDays, getTomorrow} from "./helpers/date-manage.js";
import {Place, SearchFormData} from "./interfaces/searchFormDataInterface.js";
import {search} from "./helpers/search.js";

export function renderSearchFormBlock (arrivalDate: Date = getTomorrow(), leavingDate: Date = getPlusTwoDays(arrivalDate)) {
  const arrivalString = getDateString(arrivalDate);
  const leavingString = getDateString(leavingDate);
  const minDate = getDateString(new Date());
  const maxDate = getDateString(getNextMonthLastDay());
  const searchData: SearchFormData = {
    arrivalDate: arrivalString,
    leavingDate: leavingString
  }

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
<!--          <div class="providers">-->
<!--            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>-->
<!--            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>-->
<!--          </div>-->
        </div>
        
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${arrivalString} min=${minDate} max=${maxDate} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${leavingString} min=${minDate} max=${maxDate} name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button type="button" id="search-btn">Найти</button></div>
          </div>
          
        </div>
      </fieldset>
    </form>
    `
  )
  const button = document.getElementById('search-btn');
  button.onclick = function() {
    search(searchData, (arg)=>{
      console.log(arg)});
  };
}
