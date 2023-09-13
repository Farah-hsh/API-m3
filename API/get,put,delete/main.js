// API last month

axios.get("https://64fdc847596493f7af7e8fc1.mockapi.io/api/v1/users").then((response)=> {
    const api= response.data;
    const apiTable= document.getElementById("data-list");

    api.map((result) =>{
        const row= document.createElement("tr");
        row.innerHTML=`
        <td>
            <div class="card-container">
                <p>${result.id}</p>
                <h1>${result.title}<h1>
                <img src="${result.image}">

                <button  onclick="deleteData('${result.id}')">حذف</button>

                <button onclick="editData('${result.id}', '${result.image}', '${result.title}')">تعديل</button>
               
            </div>
         </td>
        `
        apiTable.appendChild(row);
   
        
    })  

}) 
const editData = (id, image, title) => {

    const newamge = prompt("قم بأدخال رابط الصورة ", image);
    const newtitle = prompt("New title ", title);

    if (newamge || newtitle) {
      axios.put(`https://64fdc847596493f7af7e8fc1.mockapi.io/api/v1/users/${id}`,{image: newamge , title: newtitle ,}).then((re) => {
        console.log(re);
      });
    }
};

const deleteData = (id) => {
    axios.delete(`https://64fdc847596493f7af7e8fc1.mockapi.io/api/v1/users/${id}`).then((response) => {
        console.log(response);
    }); 
      
}



