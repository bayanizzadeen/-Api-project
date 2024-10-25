function go_to_next_page(){
    window.open ("http://127.0.0.1:5501/madi2.html")
}
const maindiv=document.querySelector('.container')
const repoList =[];
fetch('https://api.github.com/users/Saeed99Madi/repos')
.then(response => {
  return response.json(); // تحويل الاستجابة إلى JSON
})
.then(data => {
  data.forEach(repo => {
    const repoNameWithoutUnderscore = repo.name.replaceAll('_', ' ')
    const description = repo.description || 'No description provided'; // يوفر قيمة افتراضية في حال عدم وجود الوصف
    repoList.push({
      name: repoNameWithoutUnderscore,
      description: description // إضافة الوصف إلى القائمة
    });
    
  });
  
 console.log("repolist in fetsh",repoList)
 return repoList;
})
.then(data=>{

  for(item of data){
    const childDiv=document.createElement('div')
    childDiv.classList.add('divInContaner')
    const childimg=document.createElement('img')
    childimg.classList.add('imgOfDiv')
     childimg.setAttribute("src" ,"/imag/moon.png")
     childimg.setAttribute( "alt" , "moon")
    childDiv.appendChild(childimg)
    const childDivdiscription=document.createElement('div')
    childDivdiscription.classList.add('discription') 
    childDiv.appendChild(childDivdiscription)
    const titel=document.createElement('h1')
    titel.classList.add('h1div')
    titel.innerHTML=item.name
    childDivdiscription.appendChild(titel)
    const pra=document.createElement('p')
    pra.classList.add('pdiv')
    pra.innerHTML=item.description
    childDivdiscription.appendChild(pra)
    maindiv.appendChild(childDiv)
    
  }
})

.catch(error => { 
  console.log('Something went wrong', error);
});
