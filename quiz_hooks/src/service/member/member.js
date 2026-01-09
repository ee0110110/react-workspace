let data_set = [
    {id:"aaa", pwd:"aaa", name:"홍길동", addr:"산골짜기"},
    {id:"bbb", pwd:"bbb", name:"김개똥", addr:"개똥별"},
    {id:"ccc", pwd:"ccc", name:"고길동", addr:"마포구"},
]
//필터(data => data.name === 이름)
//export getList =()=> data_set
const path = "http://localhost:4000/mem"
export function getList(){
    //const getData = fetch(path);
    //return (getData)
    return data_set; 
    //return getData; 위는 리액트만 이용 밑은 백엔드 이용
}
//const path ="http://localhost:4000/mem"
export const getOne = ( id ) => 
    data_set.filter( data => data.id === id )[0] // 이전 가짜 임시 데이터일때 사용
    //fetch(path + "/" + id) // http://localhost:4000/mem/ccc-s 패쓰로 앞에 주소까지있기때문

/*
export function getOne( id ){
    //console.log("svc one id : ", id)
    return data_set.filter( data => data.id === id )[0]
    //return "bbb 데이터 검색 결과"
} 밑에는 같지않은 아이디를 삭제해주는 효과 */

export const memberDelete = (delId) => {
    data_set = data_set.filter( data => data.id !== delId )
}
// http://localhost:4000/mem 이게 path
export const register = ( user ) => {
    //delete user.pwdChk; // 특정 키 삭제
    data_set = data_set.concat(user)
    //{id:값, name:값, pwd:값}
    /*
    fetch(path, {
        method : "post",
        headers : {"Contents-Type" : "application/json"},
        body : JSON.stringify(user) //포스트 방식으로 전송, 오브젝트 타입을 제이슨을 거쳐(?) 문자타입으로 변환시켜줌 - 데이터 추가 가능해짐
        })*/
}
export const modify = ( user ) => {
    data_set = data_set.filter( data => data.id !== user.id )
    data_set = data_set.concat( user )
}