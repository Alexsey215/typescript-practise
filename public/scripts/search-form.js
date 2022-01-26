import { renderBlock } from './lib.js';
import { getDateString, getNextMonthLastDay, getPlusTwoDays, getTomorrow } from "./helpers/date-manage.js";
import { search } from "./helpers/search.js";
export function renderSearchFormBlock(arrivalDate = getTomorrow(), leavingDate = getPlusTwoDays(arrivalDate)) {
    const arrivalString = getDateString(arrivalDate);
    const leavingString = getDateString(leavingDate);
    const minDate = getDateString(new Date());
    const maxDate = getDateString(getNextMonthLastDay());
    const searchData = {
        arrivalDate: arrivalString,
        leavingDate: leavingString
    };
    renderBlock('search-form-block', `
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
    `);
    const button = document.getElementById('search-btn');
    button.onclick = function () {
        search(searchData, (arg) => {
            console.log(arg);
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUN0QyxPQUFPLEVBQUMsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUV6RyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFM0MsTUFBTSxVQUFVLHFCQUFxQixDQUFFLGNBQW9CLFdBQVcsRUFBRSxFQUFFLGNBQW9CLGNBQWMsQ0FBQyxXQUFXLENBQUM7SUFDdkgsTUFBTSxhQUFhLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sYUFBYSxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLE1BQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7SUFDckQsTUFBTSxVQUFVLEdBQW1CO1FBQ2pDLFdBQVcsRUFBRSxhQUFhO1FBQzFCLFdBQVcsRUFBRSxhQUFhO0tBQzNCLENBQUE7SUFFRCxXQUFXLENBQ1QsbUJBQW1CLEVBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBa0JzRCxhQUFhLFFBQVEsT0FBTyxRQUFRLE9BQU87Ozs7MkRBSTFDLGFBQWEsUUFBUSxPQUFPLFFBQVEsT0FBTzs7Ozs7Ozs7Ozs7OztLQWFqRyxDQUNGLENBQUE7SUFDRCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JELE1BQU0sQ0FBQyxPQUFPLEdBQUc7UUFDZixNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFDLEVBQUU7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuaW1wb3J0IHtnZXREYXRlU3RyaW5nLCBnZXROZXh0TW9udGhMYXN0RGF5LCBnZXRQbHVzVHdvRGF5cywgZ2V0VG9tb3Jyb3d9IGZyb20gXCIuL2hlbHBlcnMvZGF0ZS1tYW5hZ2UuanNcIjtcbmltcG9ydCB7UGxhY2UsIFNlYXJjaEZvcm1EYXRhfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3NlYXJjaEZvcm1EYXRhSW50ZXJmYWNlLmpzXCI7XG5pbXBvcnQge3NlYXJjaH0gZnJvbSBcIi4vaGVscGVycy9zZWFyY2guanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaEZvcm1CbG9jayAoYXJyaXZhbERhdGU6IERhdGUgPSBnZXRUb21vcnJvdygpLCBsZWF2aW5nRGF0ZTogRGF0ZSA9IGdldFBsdXNUd29EYXlzKGFycml2YWxEYXRlKSkge1xuICBjb25zdCBhcnJpdmFsU3RyaW5nID0gZ2V0RGF0ZVN0cmluZyhhcnJpdmFsRGF0ZSk7XG4gIGNvbnN0IGxlYXZpbmdTdHJpbmcgPSBnZXREYXRlU3RyaW5nKGxlYXZpbmdEYXRlKTtcbiAgY29uc3QgbWluRGF0ZSA9IGdldERhdGVTdHJpbmcobmV3IERhdGUoKSk7XG4gIGNvbnN0IG1heERhdGUgPSBnZXREYXRlU3RyaW5nKGdldE5leHRNb250aExhc3REYXkoKSk7XG4gIGNvbnN0IHNlYXJjaERhdGE6IFNlYXJjaEZvcm1EYXRhID0ge1xuICAgIGFycml2YWxEYXRlOiBhcnJpdmFsU3RyaW5nLFxuICAgIGxlYXZpbmdEYXRlOiBsZWF2aW5nU3RyaW5nXG4gIH1cblxuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLWZvcm0tYmxvY2snLFxuICAgIGBcbiAgICA8Zm9ybT5cbiAgICAgIDxmaWVsZHNldCBjbGFzcz1cInNlYXJjaC1maWxlZHNldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCI+0JPQvtGA0L7QtDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaXR5XCIgdHlwZT1cInRleHRcIiBkaXNhYmxlZCB2YWx1ZT1cItCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgZGlzYWJsZWQgdmFsdWU9XCI1OS45Mzg2LDMwLjMxNDFcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuPCEtLSAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvdmlkZXJzXCI+LS0+XG48IS0tICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImhvbXlcIiBjaGVja2VkIC8+IEhvbXk8L2xhYmVsPi0tPlxuPCEtLSAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJmbGF0LXJlbnRcIiBjaGVja2VkIC8+IEZsYXRSZW50PC9sYWJlbD4tLT5cbjwhLS0gICAgICAgICAgPC9kaXY+LS0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2staW4tZGF0ZVwiPtCU0LDRgtCwINC30LDQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1pbi1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT0ke2Fycml2YWxTdHJpbmd9IG1pbj0ke21pbkRhdGV9IG1heD0ke21heERhdGV9IG5hbWU9XCJjaGVja2luXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLW91dC1kYXRlXCI+0JTQsNGC0LAg0LLRi9C10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLW91dC1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT0ke2xlYXZpbmdTdHJpbmd9IG1pbj0ke21pbkRhdGV9IG1heD0ke21heERhdGV9IG5hbWU9XCJjaGVja291dFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYXgtcHJpY2VcIj7QnNCw0LrRgS4g0YbQtdC90LAg0YHRg9GC0L7QujwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJtYXgtcHJpY2VcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgbmFtZT1cInByaWNlXCIgY2xhc3M9XCJtYXgtcHJpY2VcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwic2VhcmNoLWJ0blwiPtCd0LDQudGC0Lg8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvZm9ybT5cbiAgICBgXG4gIClcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1idG4nKTtcbiAgYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBzZWFyY2goc2VhcmNoRGF0YSwgKGFyZyk9PntcbiAgICAgIGNvbnNvbGUubG9nKGFyZyl9KTtcbiAgfTtcbn1cbiJdfQ==