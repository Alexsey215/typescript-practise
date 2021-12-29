import { renderBlock } from './lib.js'

export function renderSearchFormBlock (checkIn, checkOut) {
  const today = new Date();

  let minDate: string = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate());
  let maxDate: string = today.getMonth() !== 11 ?
    today.getFullYear() + '-' + (new Date().getMonth()+1)%12 + 1 + '-' + new Date(today.getFullYear(),today.getMonth() + 1, 0).getDate() :
    (today.getFullYear() + 1) + '-' + (new Date().getMonth()+1)%12 + 1 + '-' + new Date(today.getFullYear(),today.getMonth() + 1, 0).getDate();

  const defaultMinDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 1);
  const defaultMaxDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 2);

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
            <input id="check-in-date" type="date" value=${!!checkIn ? checkIn: defaultMinDate} min=${minDate} max=${maxDate} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${!!checkOut ? checkOut: defaultMaxDate} min=${minDate} max=${maxDate} name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
          
        </div>
      </fieldset>
    </form>
    `
  )
}
