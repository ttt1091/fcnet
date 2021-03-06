import Vue from 'vue'

Vue.prototype.$dateTimeToJaDate = (dateTimeString) => {
 if (dateTimeString) {
  const date = new Date(dateTimeString)
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
 }
 return ''
}

Vue.prototype.$dateToJaDate = (dateString) => {
  if (dateString) {
   const date = new Date(dateString)
   return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日${date.getHours()}`
  }
  return ''
 }