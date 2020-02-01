let defaultCity = '成都'
try {
  if (localStorage.City) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
