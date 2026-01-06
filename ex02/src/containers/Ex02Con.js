import{ useState } from "react";
import Ex02Com from"../components/Ex02Com";
function Ex02Con(){
    const [arr, setArr] = useState([1,2])
    const [num, setNum] = useState(0);
    console.log("시작 arr : ", arr)
    const onBtn = () => {
        //setNum(num + 1);
        //arr.push("데이터 추가"); 얕은복사라서 데이터를 새로 그리려면 깊은 복사로 해서 리로드해서 다시 실행되서 그려짐
        //const arr2 = [...arr, "추가~"] 이게 깊은 복사라서 다시 그려짐, 아니면 밑처럼 컨캣, 보통 이방식을 많이 씀
        const arr2 = arr.concat("추가된다");
        //arr2.push("aaa"); 이런경우는 주소 값이 변경이 안됨, 얕은 복사임
        console.log("onBtn arr : ", arr)
        console.log("onBtn arr2 : ", arr2)
        setArr( arr2 );
    }
    return(<>
    <Ex02Com arr={arr} onBtn={onBtn} />
    </>)
}
export default Ex02Con;