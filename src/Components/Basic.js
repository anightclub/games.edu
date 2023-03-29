import { Link } from "react-router-dom"
import { inputData } from './inputData';
import { useState,} from 'react';



export default function Basic(){
    return(
        <div className='basic-container'>
            <h3 className='txt-centre'>There are eight groups of alphabates according to the articulation points</h3>
            <div className='letter-block'>
                <h3>1. Lips (شفتین)</h3>
                <div>ب</div><div>ف</div><div>م</div><div>و</div>
            </div>
            <div className='letter-block'>
                <h3>2. Nasal Cavity (خیشوم)</h3>
                <div>مّ</div><div>نّ</div>
            </div>
            <div className='letter-block'>
                <h3>3. Oral Cavity (جوف)</h3><div>ا</div><div>و</div><div>ی</div>
            </div>
            <div className='letter-block'>
                <h3>4. Middle of the Tongue (وسط اللسان)</h3>
                <div>ج</div><div>ش</div><div>ی</div><div>ل</div><div>ن</div><div>ر</div>
            </div>
            <div className='letter-block'>
                <h3>5. Edge of the Tongue (حافۃ اللسان)</h3>
                <div>ض</div>
            </div>
            <div className='letter-block'>
                <h3>6. Tip of the Tongue (طرف اللسان)</h3>
                <div>ط</div><div>د</div><div>ت</div><div>س</div><div>ص</div><div>ز</div><div>ظ</div><div>ذ</div><div>ث</div>
            </div>
            <div className='letter-block'>
                <h3>7. Base Tongue (قاعدۃ اللسان)</h3>
                <div>ق</div><div>ک</div>
            </div>
            <div className='letter-block'>
                <h3>8. Throat (حلق)</h3>
                <div>ء</div><div>ہ</div><div>ع</div><div>ح</div><div>غ</div><div>خ</div>
            </div>
            <div className='btn-block'>
            <Link className='link' to={'/tajweed-master'}><button className='tm-back-button'>To Main Page</button></Link>
            <Link className='link' to={'/tajweed-master/b-test'}><button className='tm-test-button'>Go for Test</button></Link>
            </div>
        </div>
    )
}

const arrays = [
    ['ب', 'ف', 'م', 'و'],   // lipsLetter
    ['مّ', 'نّ'],  // nasalCavity
    ['ا', 'ی', 'و'],  // oralCavity
    ['ج', 'ش', 'ی', 'ل', 'ن', 'ر'],   // middleTounge
    ['ض'],   // edgeTounge
    ['ط', 'د', 'ت', 'س', 'ص', 'ز', 'ظ', 'ذ', 'ث'],    // tipTounge 
    ['ق', 'ک'],    // baseTounge
    ['ء', 'ہ', 'ع', 'ح', 'غ', 'خ'],    // throat
];




export function BasicTest(){


    const [letter, setLetter] = useState("--");
    const [group, setGroup] = useState('');
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState('');
    const [count, setCount] = useState(0);
    const [correctAns, setCorrectAns] = useState(0);
    const [wrongAns, setWrongAns] = useState(0);


    let lipsLetter = "Lips (شفتین)";
    let nasalCavity = "Nasal Cavity (خیشوم)";
    let oralCavity = "Oral Cavity (جوف)";
    let middleTounge = "Middle of the Tongue (وسط اللسان)";
    let edgeTounge = "Edge of the Tongue (حافۃ اللسان)";
    let tipTounge = "Tip of the Tongue (طرف اللسان)";
    let baseTounge = "Base Tongue (قاعدۃ اللسان)";
    let throat = "Throat (حلق)";

    const makharijName = [lipsLetter, nasalCavity, oralCavity, middleTounge, edgeTounge, tipTounge, baseTounge, throat];
    
    function createLetter(){
        let randomNumber = Math.floor(Math.random() * arrays.length);
        setLetter(arrays[randomNumber][Math.floor(Math.random() * arrays[randomNumber].length)]);
        setGroup(makharijName[randomNumber]);
        setCount(count + 1);
    }

    function checkAnswer(answer, actualAnswer) {
        if (answer === actualAnswer){
           setResult("Great, It's correct Answer");
           setCorrectAns(correctAns + 1);
        } else{
            setResult("Incorrect answer");
            setWrongAns(wrongAns + 1);
        }
    }

    return(
        <div className='txt-centre'>
            <h3>Click the button to get random letter then select the group </h3>
            <button className='tm-main-button' onClick={createLetter}>Get Random Letter</button>
            <h1>{letter}</h1>
            <h1>{result}</h1>
            <div className='check-box'>
                <div>
                    {
                        inputData.map((element) => {
                            function setAns(e){
                                setAnswer(e.target.value);
                            }
                            return(
                                <>
                                <input onClick={(e) => {setAns(e)}} type="radio" name='group' id={element.id} value={element.type} />
                                <label for={element.id}>This letter belongs to {element.type}</label><br />
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <button type="submit" className='tm-main-button' onClick={() => {checkAnswer(answer, group)}}>Check Answer</button>
                    <p>Total Questions: {count}</p>
                    <p>Correct Answers: {correctAns}</p>
                    <p>Wrong Answers: {wrongAns}</p>
                </div>
            </div>
        </div>
    )
}