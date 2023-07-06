var array=[];
dem=0;
array=JSON.parse(localStorage.getItem("account_list"));
function addAccount(email,password){
    
    var taiKhoanDaTonTai=false;

    console.log(array.length);
    if(array.length===null){
        array.push([email,password]);
    }
    for(i=0;i<array.length;i++){
        var sp=array[i];
        if(email==sp[0]){
           
            taiKhoanDaTonTai=true;
            return false;
        }
        
    }
    if(taiKhoanDaTonTai==false){
        array.push([email,password]);
      
    localStorage.setItem('account_list',JSON.stringify(array));

    }
    if(taiKhoanDaTonTai==false){
        return true;
    }
}
function login(email,password){
    var taiKhoanDaTonTai=false;
    
    if(array.length===null){
        return false;
    }
    else {
        for(i=0;i<array.length;i++){
            var sp=array[i];
            console.log(sp);
            console.log(email)
            if(email==sp[0]&&password==sp[1]){
                
                taiKhoanDaTonTai=true;
                return true;
             
               
            }
           
            
        }
        if(!taiKhoanDaTonTai){
            return false;
        }
    }
    
}