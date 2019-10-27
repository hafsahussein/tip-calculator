const form= document.forms[0];
form.addEventListener('submit',e=>{
    e.preventDefault();
    const bill= form['bill'].value.replace(/\s+/g,'');
  const serviceQuality=Number(form['servicequality'].value);
  const people=form['people'].value.replace(/\s+/g,'');
  const result=document.querySelector('#result');
  if(Number(bill>0)&&Number(people>0)){
    result.textContent='$'+(bill*serviceQuality)/people+ ' each'
    if(people==1)
    result.textContent='$'+(bill*serviceQuality) 
}
else{
  result.style.color='red';
    result.style.bottom='10%'
  result.textContent=`Invalid values
  Make sure to enter numbers greater than zero`;

}
form['bill'].value='';
form['people'].value='';
form['servicequality'].value='';

})
