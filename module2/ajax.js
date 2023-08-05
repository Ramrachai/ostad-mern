let ajaxTbody = document.getElementById("ajax-tbody")
let ajaxBtn = document.getElementById("ajax-btn")
let loading = document.getElementById("ajax-loading")

const getData = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts")
    let json = await res.json()
    return json
}

const showInTable = async () => {
    ajaxTbody.innerHTML = ""
    loading.classList.remove('d-none')
    let data = await getData()
    if (Object.keys(data).length === 0 && data.constructor === Object) {
        alert("Sorry! API call failed");
        loading.classList.add('d-none');
    } else {
        loading.classList.add('d-none');
        data.map(item => {
            ajaxTbody.innerHTML += `
      <tr>
        <td>${item.userId}</td>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.body}</td>
      </tr>
    `;
        });
    }

}

ajaxBtn.addEventListener('click', showInTable)