import React, {useState} from "react";


let Form= () => {
    let [board,setBoard] = useState({
        title: '',
        content:''
    })

    let {title,content} = board

    let onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setBoard({
            title:'',
            content: ''
        })
    }
    let onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let {name,value} = e.target
        setBoard({
            ...board,
            [name]: value
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <input name="title" value={title} onChange={onChange} placeholder="제목"/>
            <input name="content" value={content} onChange={onChange} placeholder="내용"/>
            <button type="submit">등록하기</button>
        </form>
    )
}

export default Form