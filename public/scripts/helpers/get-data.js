export const getUserData = () => {
    const ls = window.localStorage;
    const userActualData = ls.getItem('user');
    return JSON.parse(userActualData);
};
export const getFavoritesAmount = () => {
    const ls = window.localStorage;
    return Number(ls.getItem('favoritesAmount'));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaGVscGVycy9nZXQtZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsR0FBRyxFQUFFO0lBQzlCLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDL0IsTUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQXNCLENBQUM7SUFDL0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQXdCLENBQUMsQ0FBQztBQUM5QyxDQUFDLENBQUE7QUFDRCxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRyxHQUFHLEVBQUU7SUFDckMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztJQUMvQixPQUFPLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQVksQ0FBQztBQUMxRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0VXNlckRhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IGxzID0gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgY29uc3QgdXNlckFjdHVhbERhdGEgPSBscy5nZXRJdGVtKCd1c2VyJykgYXMgdW5rbm93biBhcyBzdHJpbmc7XG4gIHJldHVybiBKU09OLnBhcnNlKHVzZXJBY3R1YWxEYXRhIGFzIHN0cmluZyk7XG59XG5leHBvcnQgY29uc3QgZ2V0RmF2b3JpdGVzQW1vdW50ID0gKCkgPT4ge1xuICBjb25zdCBscyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIHJldHVybiBOdW1iZXIobHMuZ2V0SXRlbSgnZmF2b3JpdGVzQW1vdW50JykpIGFzIHVua25vd247XG59XG4iXX0=