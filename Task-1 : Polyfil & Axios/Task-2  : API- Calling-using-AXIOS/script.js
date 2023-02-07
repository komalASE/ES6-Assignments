// axios.get('https://jsonplaceholder.typicode.com/albums').then(res => {
//     console.log('res');
// })

const sendGetRequest = async () => {
    try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/albums');
        console.log(resp);
        let tableData = "";
        // console.log("Line No ------> 10",resp.data)
        resp.data?.map((value) => {
            tableData += `<tr>
            <td>${value.userId}</td>
            <td>${value.id}</td>
            <td>${value.title}</td>
            </tr>`
        });
        document.getElementById("table-body").innerHTML = tableData;
    } catch (err) {
        console.error(err);
    }
};
sendGetRequest();

