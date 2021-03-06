import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';
import { getFavoritesAmount, getUserData } from "./helpers/get-data.js";
import { getTodosByCount } from "./todosByCount.js";
const ls = window.localStorage;
const userData = {
    username: 'Wade Warren',
    avatarUrl: '../img/avatar.png'
};
ls.setItem('user', JSON.stringify(userData));
ls.setItem('favoritesAmount', '2');
window.addEventListener('DOMContentLoaded', () => {
    getTodosByCount(5);
    renderUserBlock(getUserData().username, getUserData().avatarUrl, getFavoritesAmount());
    renderSearchFormBlock();
    renderSearchStubBlock();
    renderToast({ text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' }, { name: 'Понял', handler: () => { console.log('Уведомление закрыто'); } });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sVUFBVSxDQUFBO0FBQ3RDLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxXQUFXLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUN0RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFFbEQsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztBQUMvQixNQUFNLFFBQVEsR0FBRztJQUNmLFFBQVEsRUFBRSxhQUFhO0lBQ3ZCLFNBQVMsRUFBRSxtQkFBbUI7Q0FDL0IsQ0FBQTtBQUNELEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUM3QyxFQUFFLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRW5DLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDL0MsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2xCLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFrQixFQUFFLFdBQVcsRUFBRSxDQUFDLFNBQW1CLEVBQUUsa0JBQWtCLEVBQVksQ0FBQyxDQUFBO0lBQ3BILHFCQUFxQixFQUFFLENBQUE7SUFDdkIscUJBQXFCLEVBQUUsQ0FBQTtJQUN2QixXQUFXLENBQ1QsRUFBQyxJQUFJLEVBQUUsMkRBQTJELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQyxFQUNwRixFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQSxDQUFBLENBQUMsRUFBQyxDQUNyRSxDQUFBO0FBQ0gsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJTZWFyY2hGb3JtQmxvY2sgfSBmcm9tICcuL3NlYXJjaC1mb3JtLmpzJ1xuaW1wb3J0IHsgcmVuZGVyU2VhcmNoU3R1YkJsb2NrIH0gZnJvbSAnLi9zZWFyY2gtcmVzdWx0cy5qcydcbmltcG9ydCB7IHJlbmRlclVzZXJCbG9jayB9IGZyb20gJy4vdXNlci5qcydcbmltcG9ydCB7IHJlbmRlclRvYXN0IH0gZnJvbSAnLi9saWIuanMnXG5pbXBvcnQge2dldEZhdm9yaXRlc0Ftb3VudCwgZ2V0VXNlckRhdGF9IGZyb20gXCIuL2hlbHBlcnMvZ2V0LWRhdGEuanNcIjtcbmltcG9ydCB7Z2V0VG9kb3NCeUNvdW50fSBmcm9tIFwiLi90b2Rvc0J5Q291bnQuanNcIjtcblxuY29uc3QgbHMgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuY29uc3QgdXNlckRhdGEgPSB7XG4gIHVzZXJuYW1lOiAnV2FkZSBXYXJyZW4nLFxuICBhdmF0YXJVcmw6ICcuLi9pbWcvYXZhdGFyLnBuZydcbn1cbmxzLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpO1xubHMuc2V0SXRlbSgnZmF2b3JpdGVzQW1vdW50JywgJzInKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGdldFRvZG9zQnlDb3VudCg1KVxuICByZW5kZXJVc2VyQmxvY2soZ2V0VXNlckRhdGEoKS51c2VybmFtZSBhcyBzdHJpbmcsIGdldFVzZXJEYXRhKCkuYXZhdGFyVXJsIGFzIHN0cmluZywgZ2V0RmF2b3JpdGVzQW1vdW50KCkgYXMgbnVtYmVyKVxuICByZW5kZXJTZWFyY2hGb3JtQmxvY2soKVxuICByZW5kZXJTZWFyY2hTdHViQmxvY2soKVxuICByZW5kZXJUb2FzdChcbiAgICB7dGV4dDogJ9Ct0YLQviDQv9GA0LjQvNC10YAg0YPQstC10LTQvtC80LvQtdC90LjRjy4g0JjRgdC/0L7Qu9GM0LfRg9C50YLQtSDQtdCz0L4g0L/RgNC4INC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4JywgdHlwZTogJ3N1Y2Nlc3MnfSxcbiAgICB7bmFtZTogJ9Cf0L7QvdGP0LsnLCBoYW5kbGVyOiAoKSA9PiB7Y29uc29sZS5sb2coJ9Cj0LLQtdC00L7QvNC70LXQvdC40LUg0LfQsNC60YDRi9GC0L4nKX19XG4gIClcbn0pXG5cbiJdfQ==