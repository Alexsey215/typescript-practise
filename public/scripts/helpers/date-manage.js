export const getTomorrow = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
};
export const getNextMonthLastDay = () => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth() + 2, 0);
};
export const getPlusTwoDays = (arrival) => {
    const leaving = new Date(arrival);
    leaving.setDate(leaving.getDate() + 2);
    return leaving;
};
export const addZero = (dateNumber) => {
    const isSingle = dateNumber < 10;
    return (isSingle ? '0' : '') + dateNumber;
};
export const getDateString = (date) => {
    const year = date.getFullYear();
    const month = addZero(date.getMonth() + 1);
    const day = addZero(date.getDate());
    return `${year}-${month}-${day}`;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1tYW5hZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaGVscGVycy9kYXRlLW1hbmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsR0FBRyxFQUFFO0lBQzlCLE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDekIsTUFBTSxRQUFRLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDekMsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFBO0FBRUQsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsR0FBRyxFQUFFO0lBQ3RDLE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7SUFDeEIsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNoRSxDQUFDLENBQUE7QUFFRCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsQ0FBQyxPQUFhLEVBQUUsRUFBRTtJQUM5QyxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUE7QUFFRCxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsQ0FBQyxVQUFVLEVBQVUsRUFBRTtJQUM1QyxNQUFNLFFBQVEsR0FBRyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ2pDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO0FBQzVDLENBQUMsQ0FBQTtBQUVELE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxDQUFDLElBQVUsRUFBRSxFQUFFO0lBQzFDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQzFDLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNwQyxPQUFPLEdBQUcsSUFBSSxJQUFJLEtBQUssSUFBSSxHQUFHLEVBQUUsQ0FBQTtBQUNsQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0VG9tb3Jyb3cgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSh0b2RheSk7XG4gIHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSk7XG4gIHJldHVybiB0b21vcnJvdztcbn1cblxuZXhwb3J0IGNvbnN0IGdldE5leHRNb250aExhc3REYXkgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxuICByZXR1cm4gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSArIDIsIDApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UGx1c1R3b0RheXMgPSAoYXJyaXZhbDogRGF0ZSkgPT4ge1xuICBjb25zdCBsZWF2aW5nID0gbmV3IERhdGUoYXJyaXZhbCk7XG4gIGxlYXZpbmcuc2V0RGF0ZShsZWF2aW5nLmdldERhdGUoKSArIDIpO1xuICByZXR1cm4gbGVhdmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFplcm8gPSAoZGF0ZU51bWJlcik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGlzU2luZ2xlID0gZGF0ZU51bWJlciA8IDEwO1xuICByZXR1cm4gKGlzU2luZ2xlID8gJzAnIDogJycpICsgZGF0ZU51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGdldERhdGVTdHJpbmcgPSAoZGF0ZTogRGF0ZSkgPT4ge1xuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IGFkZFplcm8oZGF0ZS5nZXRNb250aCgpICsgMSlcbiAgY29uc3QgZGF5ID0gYWRkWmVybyhkYXRlLmdldERhdGUoKSk7XG4gIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gXG59XG4iXX0=