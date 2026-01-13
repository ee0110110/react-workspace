import CheckBox03Com, { CheckComponent } from "../components/CheckBox03Com";
import { useState } from "react";

const initalCheckboxs = [
    {key:1, label:"게임", isChecked: false},
    {key:2, label:"멍", isChecked: true},
    {key:3, label:"잠", isChecked: false}
]
const CheckBox03Con =() =>{
    const[hobby, setHobby] = useState(initalCheckboxs)
    const[isChecked, setIsChecked] = useState(false)
    const onChange =()=>{
        //isChecked = (isChecked === true? false : true)
        setIsChecked( !isChecked )
    } //! 는 트루면 폴스로, 폴스면 트루로 반전시키는 역할 //isChecked = (isChecked === true? false : true )
const onChangeHobby = ( e ) => {
        //console.log( e.target )
        //console.log( hobby[0]['key'] == e.target.id )
        //updateHobby = [ 
        // {key:1, label:"게임", isChecked : false} ,
        // {key:2, label:"11", isChecked : false} , 
        //{key:3, label:"22", isChecked : true} ]
        const updateHobby = hobby.map(data => (
           String(data.key) === e.target.id ? 
                {...data , isChecked:!data.isChecked } : data
        ) );
        setHobby( updateHobby );
    }
        /*
        const arr = [...initalCheckboxs];
        if( e.target.id === "1" ){
            //const arr = [...initalCheckboxs];
            arr[0]["isChecked"] = !arr[0]["isChecked"]
            //setHobby(arr)
        }else if(e.target.id === "2"){
            //const arr = [...initalCheckboxs];
            arr[1]["isChecked"] = !arr[1]["isChecked"]
            //setHobby(arr)
        }else if(e.target.id === "3"){
            //const arr = [...initalCheckboxs];
            arr[2]["isChecked"] = !arr[2]["isChecked"]
            //setHobby(arr)
        }
        setHobby(arr)
        */
    
    return (<>
        <CheckComponent onChangeHobby={onChangeHobby} hobby={hobby}/>
    <hr></hr>
        <CheckBox03Com onChange={onChange} isChecked={isChecked}/>
    </>) //컨테이너로 이즈쳌트가 넘어가서 리턴으로 돌아옴
}
export default CheckBox03Con