$('#more span').click(function(e) {
    $('#more span').text(function(_,txt) {
        var ret='';

        if ( txt == 'Подробнее..' ) {
           ret = 'Свернуть';
        }else{
           ret = 'Подробнее..';
        }
        return ret;
    });
    return false;
    e.preventDefault();
});