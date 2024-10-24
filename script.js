function go_to_next_page(){
    window.open ("http://127.0.0.1:5501/madi2.html")
}
const repoList =[];
fetch('https://api.github.com/users/Saeed99Madi/repos')
.then(response => {
  return response.json(); // تحويل الاستجابة إلى JSON
})
.then(data => {
  data.forEach(repo => {
    repoList.push(repo.name) ;
  });
 console.log(repoList)
})
.catch(error => { 
  console.log('Something went wrong', error);
});