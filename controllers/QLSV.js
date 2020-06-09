// tạo object chứa thông tin request về api
var objectAjax = {
    url : 'http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien',
    method :'GET',
    responType : 'json'
}
// function load danh sách sinh viên
var loadDanhSachSinhVien = function(res){
    // dùng axios
var promise = axios(objectAjax);
promise.then(function(res){
// thành công trả về data
    //console.log(res.data);
    var contentTable ='';
    for(var i=0;i<res.data.length;i++)
    {
        var sinhVien = res.data[i];
        contentTable +=
        `<tr>
            <td>${sinhVien.MaSV}</td>
            <td>${sinhVien.HoTen}</td>
            <td>${sinhVien.Email}</td>
            <td>${sinhVien.SoDT}</td>
            <td>${sinhVien.CMND}</td>
            <td>${sinhVien.DiemToan}</td>
            <td>${sinhVien.DiemLy}</td>
            <td>${sinhVien.DiemHoa}</td>
            <td> 
            <btn class="btn btn-danger" onclick="xoaSinhVien(${sinhVien.MaSV})">Xóa</btn>
            <btn class="btn btn-primary" onclick="chinhSua(${sinhVien.MaSV})">Sửa</btn>
            </td>
        </tr>`;
    }
    document.querySelector('#tbSinhVien').innerHTML =contentTable;
}).catch(function(err){
// thất bại 
    console.log(err);
});
}
// dùng axios
var promise = axios(objectAjax);
promise.then(function(res){
// thành công trả về data
    //console.log(res.data);
    var contentTable ='';
    for(var i=0;i<res.data.length;i++)
    {
        var sinhVien = res.data[i];
        contentTable +=
        `<tr>
            <td>${sinhVien.MaSV}</td>
            <td>${sinhVien.HoTen}</td>
            <td>${sinhVien.Email}</td>
            <td>${sinhVien.SoDT}</td>
            <td>${sinhVien.CMND}</td>
            <td>${sinhVien.DiemToan}</td>
            <td>${sinhVien.DiemLy}</td>
            <td>${sinhVien.DiemHoa}</td>
            <td> <btn class="btn btn-danger" onclick="xoaSinhVien(${sinhVien.MaSV})">Xóa</btn>
            <btn class="btn btn-primary" onclick="chinhSua(${sinhVien.MaSV})">Sửa</btn>
            </td>
        </tr>`;
    }
    document.querySelector('#tbSinhVien').innerHTML =contentTable;
}).catch(function(){
// thất bại 
    console.log(err);
});
// thêm sinh viên
document.querySelector('#btnThemSinhVien').onclick = function(){
    var sv = new SinhVien();
    sv.MaSV = document.querySelector('#maSinhVien').value;
    sv.HoTen = document.querySelector('#tenSinhVien').value;
    sv.Email = document.querySelector('#emailSinhVien').value;
    sv.SoDT = document.querySelector('#sdt').value;
    sv.DiemToan = document.querySelector('#diemToan').value;
    sv.DiemLy = document.querySelector('#diemLy').value;
    sv.DiemHoa = document.querySelector('#diemHoa').value;
    // tạo object đưa dữ liệu BE
    var obAxiois = {
        url:'http://svcy.myclass.vn/api/SinhVien/ThemSinhVien',
        method: 'POST',
        data:sv // sv là dữ liệu đưa vê backend xử lý vì cần phải ghi đúng chính xác tên các thuộc tính backend yêu cầu
    }
    //Dúng Axios đưa dữ liệu về BE
    axios(obAxiois).then(function(res){
        console.log(res);
        loadDanhSachSinhVien();
    }).catch(function(err){
        console.log(err);
    })
// gọi phương thức reload 
loadDanhSachSinhVien();
}

var xoaSinhVien = function(MaSV){
    var obAjaxXoaSinhVien ={
        url :`http://svcy.myclass.vn/api/SinhVien/XoaSinhVien/${MaSV}`,
        method: 'DELETE'
    }
    axios(obAjaxXoaSinhVien).then(function(res){
        console.log(res);
        loadDanhSachSinhVien();
    }).catch(function(err){
        console.log(err);
        loadDanhSachSinhVien();
    });
}
// chỉnh sửa 
var chinhSua = function(MaSV){
    var objectAjaxChinhSua = {
        url: `http://svcy.myclass.vn/api/SinhVien/LayThongTinSinhVien/${MaSV}`, //đường dẫn be
        method:'get'
    }
    axios(objectAjaxChinhSua).then(function(res){
        //console.log(res.data);
        var sinhVien = res.data;
        // dom đến input set giá trị
        document.getElementById('maSinhVien').value = sinhVien.MaSV;
        document.getElementById('tenSinhVien').value = sinhVien.HoTen;
        document.getElementById('emailSinhVien').value = sinhVien.Email;
        document.getElementById('sdt').value = sinhVien.SoDT;
        document.getElementById('diemToan').value = sinhVien.DiemToan;
        document.getElementById('diemLy').value = sinhVien.DiemLy;
        document.getElementById('diemHoa').value = sinhVien.DiemHoa;
    }).catch(function(err){
        console.log(err);
       // loadDanhSachSinhVien();
    });
}
// chức năng cập nhật
document.querySelector('#btnCapNhat').onclick =function(){
    var sv = new SinhVien();
    sv.MaSV = document.querySelector('#maSinhVien').value;
    sv.HoTen = document.querySelector('#tenSinhVien').value;
    sv.Email = document.querySelector('#emailSinhVien').value;
    sv.SoDT = document.querySelector('#sdt').value;
    sv.DiemToan = document.querySelector('#diemToan').value;
    sv.DiemLy = document.querySelector('#diemLy').value;
    sv.DiemHoa = document.querySelector('#diemHoa').value;
    //gọi api cập nhật dữ liệu
    var objectAjaxCapNhat = {
        url : 'http://svcy.myclass.vn/api/SinhVien/CapNhatThongTinSinhVien',
        method:'PUT',
        data:sv
    }
    axios(objectAjaxCapNhat).then(function(res){
        console.log(res.data);
    }).catch(function(err){
        console.log(err.response.data);
    });
}