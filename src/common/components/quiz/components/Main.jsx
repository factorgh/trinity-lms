import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'
import '../styles/Main.css'

export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()


    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        <ol>
            <li>You will be asked 10 questions one after another.</li>
            <li>10 points is awarded for the correct answer.</li>
            <li>Each question has three options. You can choose only one options.</li>
            <li>You can review and change answers before the quiz finish.</li>
            <li>The result will be declared at the end of the quiz.</li>
        </ol>

        <form id="form">
            <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
        </div>

    </div>
  )
}


/* .container ol li{
    font-size: 1.4em;
    color: #cecece;
}

.start{
    display: flex;
    justify-content: center;
    padding-top: 2em;
}

.start .btn{
    padding: .2em 1.7em;
    border: none;
    border-radius: .1em;
    font-size: 1.2em;
    color: #202020;
    text-decoration: none;
    background-color: #faff5a;
}

#form{
    display: flex;
    justify-content: center;
    margin-top: 4em;
}

#form .userid{
    padding: .7em 2em;
    width: 50%;
    border: none;
    border-radius: 3px;
    font-size: 1em;
} 
