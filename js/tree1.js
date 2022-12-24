var collapsed = true;
function toggle(){
    var fs = top.document.getElementsByTagName('frameset')[0];

    var f = fs.getElementsByTagName('frame');
    if (collapsed){
        fs.rows = '250px,*';
        fs.noResize = false;
        f[0].noResize = false;
        f[1].noResize = false;
    }else{
        fs.rows = '30px,*';
        fs.noResize = true;
        f[0].noResize = true;
        f[1].noResize = true;
        }
    collapsed = !collapsed;
}