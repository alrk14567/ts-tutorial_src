import React from 'react';
import logo from './logo.svg';
import './App.css';

let number: number=4
number=3.14
number=-50

let message: string="abc"
message= "스트롱!"
message="소시지!"

let numberArray: number[] = []
numberArray.push(5)
numberArray.push(3.14)

let lunch: "치킨"|"햄버거"|"국밥"|"삼각김밥"
lunch = "치킨"
lunch = "국밥"
lunch = "햄버거"
// lunch = "스테이크" => 런치에는 치킨, 햄버거, 국밥, 삼각김밥 중 하나만 들어갈 수 있다.

// undefined, null 도 저장 가능한 값으로 처리 가능
let status: 'STATUS_OK' | undefined | null
status = undefined

let obj: any
obj=3
obj="dmdkdkdkdk"
obj={id:4, name:'배고파..'}

// 함수의 경우, 파라미터의 타입과 함수의 리턴타입을 지정할 수 있다.
 function add(a:number, b:number): number {
    return a+b
 }

 let result: string
// result=add(3,4) 에러가 뜬다 왜?? result는 string 값이니까

//필요에 따라서는 내가 객체를 설계하고
// 각각의 어트리뷰트에 어떤 데이터타입의 값이 들어갈지도 설정이 가능하다.
type student = {
    id: number,
    name: string
}

type  A={
    title:string,
    content: string
}
// 2개의 객체를 합쳐서 하나의 객체로 만들어주는 concat 메소드
function concat<A, student>(a:A,b:student): A&student {
    return {
        ...a,
        ...b
    }
}

console.log(concat<A,student>({title: 'abc',content:'def'},{id:4,name:'재영조'}))

type IndexProps = {
    id: number,
    nickname: string

}

let App = ({nickname, id}: IndexProps) => {
    return (
        <div className="App">
            <h1>{id}번 회원 {nickname}님, Hello, World!!!</h1>
        </div>
    )
}



export default App;
