$.fn.ImgZoomIn = function () {
    var window_h = $(window).height();
    var scroll_h = $(window).scrollTop();

    imgstr = '<img id="ImgZoomInImage" src="' + $(this).attr('src')+'" />';
    bgstr = '<div id="ImgZoomInBG" class="zoom-bg"><img id="closeZoom" class="close" src="img/return.png" /><img id="scale-hint" class="scale-pic-hint" src="img/scale.png" /><div class="pinch-zoom">'+imgstr+'</div></div>';
    if ($('#ImgZoomInBG').length < 1) {
        $('#main').append(bgstr);
    }
    if ($('#ImgZoomInImage').length < 1) {
        $('#main').append(imgstr);
    }
    else {
        $('#ImgZoomInImage').attr('src', $(this).attr('src'));
    }

    $('#ImgZoomInBG').show();
    $('#ImgZoomInImage').show();

};