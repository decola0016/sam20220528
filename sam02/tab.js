(()=>{
    const $doc=document;
    const $tab=$doc.getElementById('js-tab');
    const $nav=$tab.querySelectorAll('[data-nav]');
    const $content=$tab.querySelectorAll('[data-con]');
    const $dataNavItem=document.getElementsByClassName('tab-nav-item');

//初期化
const init=()=>{
$content[0].style.display='block';
$dataNavItem[0].classList.add('is-active');
};

//動作
init();

//条件イベント
const handler =(e)=>{
    for(let i=0;i<$nav.length;i++){
        $nav[i].addEventListener('click',(e)=>{
            e.preventDefault();
            draw(i,e);
        });
    };
};

//動作
const draw= (i,e)=>{
    const $this=e.target;
    const $dataNavValue=$this.dataset.nav; 
       let dnvNum=+$dataNavValue;
     +dnvNum;
     //console.log(i,dnvNum);
     $content[i].style.display='block';
     $dataNavItem[i].classList.add('is-active');
     for(let j=0;j<$content.length;j++){
        if(i===j){
            continue;
        };
            $content[j].style.display='none';
            $dataNavItem[j].classList.remove('is-active');
     };
     };

handler();

})();