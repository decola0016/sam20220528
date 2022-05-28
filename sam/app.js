const quiz=[
{
    question:'一番飲まれているコーヒー豆の種類は？',
    answer:['アラビカ種', 'ロブスタ種', 'アラビア種', 'ロブスター種'],
    correct:'アラビカ種'
},
{
    question:'アメリカンコーヒーと言えば？',
    answer:['お湯で薄めたコーヒー', 'アメーリカーン', '浅煎りのコーヒー豆を使ったコーヒー', 'どれでもない'],
    correct:'浅煎りのコーヒー豆を使ったコーヒー'
},
{
    question:'コーヒーを入れる最適な温度とは言えば？',
    answer:['熱さが最高100℃', 'ちょいとぬるめ85℃', '玉露と同じ60℃', '常温'],
    correct:'ちょいとぬるめ85℃'
}

];
let quizCount=0;
const quizlength=quiz.length;
let score=0;

//console.log(document.getElementsByClassName('m-2')[0].innerText);
const $button=document.getElementsByTagName('button');

//クイズ問題の画面描画
const setQuiz=(quizCount)=>{
    document.getElementById('js-question').textContent=quiz[quizCount].question;
       
    for(let i=0;i<quiz[quizCount].answer.length;i++){
        $button[i].textContent=quiz[quizCount].answer[i];
    };    
}
setQuiz(quizCount);
//ボタン判定
for(let i=0;i<quiz[quizCount].answer.length;i++){
    //console.log(correct);
     $button[i].addEventListener('click',(e)=>{
        if(quiz[quizCount].correct===e.target.textContent){
            window.alert('正解');
            score=score+10;
        }else{
            window.alert('不正解');
        }
        quizCount++;
     if(quizCount<quizlength){
        setQuiz(quizCount);
     }else{
        window.alert('クイズは終了!!'+'あなたの得点は'+score+'点です');
     };  
          });
};

/*
document.getElementById('js-question').style.color='red';

if (document.getElementsByClassName('m-2')[0].textContent.includes('*')) {
    //document.getElementsByClassName('btn btn-primary').style.color='red';
    document.getElementById('js-btn-1').style.color='red';
  }
  */

/*
  const quiz='ゲーム史上、最も売れたゲーム機はどれ？';
  const answer=['スーパーファミコン', 'PlayStation 2', 'ニンテンドーDS', 'Xbox 360'];
  const correct= 'ニンテンドーDS';
  
  //console.log(document.getElementsByClassName('m-2')[0].innerText);
  const $button=document.getElementsByTagName('button');
  
  //クイズ問題の画面描画
  const setQuiz=()=>{
      document.getElementById('js-question').textContent=quiz;
         
      for(let i=0;i<answer.length;i++){
          $button[i].textContent=answer[i];
      };    
  }
  setQuiz();
  //ボタン判定
  for(let i=0;i<answer.length;i++){
      //console.log(correct);
       $button[i].addEventListener('click',(e)=>{
          if(correct===e.target.textContent){
              window.alert('正解');
          }else{
              window.alert('不正解');
          }
            });
  };*/