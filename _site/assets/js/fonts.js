
  $(document).ready ->

    is_chrome = navigator.userAgent.indexOf('Chrome') > -1
    is_explorer = navigator.userAgent.indexOf('MSIE') > -1
    is_firefox = navigator.userAgent.indexOf('Firefox') > -1
    is_safari = navigator.userAgent.indexOf("Safari") > -1
    is_opera = navigator.userAgent.indexOf("Presto") > -1
    is_mac = (navigator.userAgent.indexOf('Mac OS') != -1)
    is_windows = !is_mac

    if is_chrome && is_safari
      is_safari=false

    if is_safari || is_windows
      $('body').css
        '-webkit-text-stroke': '0.5px'
