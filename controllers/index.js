// đọc file json
// tạo ra đối tượng chứa 3 thuộc tính cần thiết để giao tiếp BE
var objectAjax = {
    url:'../data/DanhSachNguoiDung.json',//Đường dẫn đến file chứa dữ liệu hoặc api
    method:'GET',// giao thức backend cung cấp với url
    responseType:'json'
}
// hoặc truyền nguyên hàm
// var renderTable = function(res){
//     var noiDungTable ='';
//     for(var i=0;i<res.data.length;i++){
//         var nguoiDung = res.data[i];
//         noiDungTable +=`
//         <tr>
//             <td>${nguoiDung.TaiKhoan}</td>
//             <td>${nguoiDung.MatKhau}</td>
//             <td>${nguoiDung.HoTen}</td>
//             <td>${nguoiDung.Email}</td>
//             <td>${nguoiDung.SoDT}</td>
//         </tr>`;
//     }
//     document.querySelector('#tblNguoiDung').innerHTML= noiDungTable;
//}
// dùng thư viện để đọc file hoặc api backend
var promise = axios(objectAjax);
promise.then(function(res){
    var noiDungTable ='';
    for(var i=0;i<res.data.length;i++){
        var nguoiDung = res.data[i];
        noiDungTable +=`
        <tr>
            <td>${nguoiDung.TaiKhoan}</td>
            <td>${nguoiDung.MatKhau}</td>
            <td>${nguoiDung.HoTen}</td>
            <td>${nguoiDung.Email}</td>
            <td>${nguoiDung.SoDT}</td>
        </tr>`;
    }
    document.querySelector('#tblNguoiDung').innerHTML= noiDungTable;
}).catch(function(error){
    // hàm xử lý khi request thất bại
    console.log(error);
});
// cách sài call back
// promise.then(function(response){
//     // hàm xử lý khi request thành công
//     console.log(response.data);
// }).catch(function(error){
//     // hàm xử lý khi request thất bại
//     console.log(error);
// });