function Site({arr,a_tag}){
    const li =[]
    /*
    for( i = 0; i< arr.length; i++){
        console.log(`arr${i} : ${arr[i]}`)
    }
    for문을 쓰든, forEach문을 쓰든 똑같은 결과*/
   a_tag.forEach( v => {
    //console.log(v);//{}
    li = li.concat(<li><a href={v.href}>{v.txt}</a></li>)
    //li.push(<li><a href={v.href}>{v.txt}</a></li>)
    //li.push(v)
});

const testArr = arr.map(value => <h3>{value}</h3>);
//[ {}, {}, {} ]
const testTag = a_tag.map(value => 
                                <a href={value.href}> {value.txt} </a> );

    return(<>
    <div>{a_tag.map(value => 
        <a href={value.href}> {value.txt} </a> )}</div>
    <hr></hr>
    <div>{testTag}</div>
    <div>{testArr}</div>
    <nav>
        <ul>{ li }</ul>
    </nav>
    </>)
}
export default Site;