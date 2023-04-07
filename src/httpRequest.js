import HttpRequest from "./axios.js"

export function getDate(data){
  return HttpRequest({
    method:"get",
    url:"/api/getpost",
    data:data
  })
}

export function addBook(data){
  return HttpRequest({
    method:"post",
    url:"/api/addbook",
    data:data
  })
}

export function delBook(data){
  return HttpRequest({
    method:"get",
    url:"/api/delbook",
    data:data
  })
}
export function updateBook(data){
  return HttpRequest({
    method:"post",
    url:"/api/updatebook",
    data:data
  })
}

export function bookDetail(data){
  return HttpRequest({
    method:"get",
    url:"/api/bookDetail",
    data:data
  })
}
