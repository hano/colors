(function(){

    var colors = ["#D98282","#D98482","#D98682","#D98882","#D98A82","#D98C82","#D98E82","#D99082","#D99282","#D99482","#D99682","#D99882","#D99B82","#D99D82","#D99F82","#D9A182","#D9A382","#D9A582","#D9A782","#D9A982","#D9AB82","#D9AD82","#D9AF82","#D9B182","#D9B382","#D9B582","#D9B782","#D9B982","#D9BB82","#D9BD82","#D9BF82","#D9C182","#D9C382","#D9C582","#D9C782","#D9C982","#D9CB82","#D9CE82","#D9D082","#D9D282","#D9D482","#D9D682","#D9D882","#D8D982","#D6D982","#D4D982","#D2D982","#D0D982","#CED982","#CBD982","#C9D982","#C7D982","#C5D982","#C3D982","#C1D982","#BFD982","#BDD982","#BBD982","#B9D982","#B7D982","#B5D982","#B3D982","#B1D982","#AFD982","#ADD982","#ABD982","#A9D982","#A7D982","#A5D982","#A3D982","#A1D982","#9FD982","#9DD982","#9BD982","#98D982","#96D982","#94D982","#92D982","#90D982","#8ED982","#8CD982","#8AD982","#88D982","#86D982","#84D982","#82D982","#82D984","#82D986","#82D988","#82D98A","#82D98C","#82D98E","#82D990","#82D992","#82D994","#82D996","#82D998","#82D99B","#82D99D","#82D99F","#82D9A1","#82D9A3","#82D9A5","#82D9A7","#82D9A9","#82D9AB","#82D9AD","#82D9AF","#82D9B1","#82D9B3","#82D9B5","#82D9B7","#82D9B9","#82D9BB","#82D9BD","#82D9BF","#82D9C1","#82D9C3","#82D9C5","#82D9C7","#82D9C9","#82D9CB","#82D9CE","#82D9D0","#82D9D2","#82D9D4","#82D9D6","#82D9D8","#82D8D9","#82D6D9","#82D4D9","#82D2D9","#82D0D9","#82CED9","#82CBD9","#82C9D9","#82C7D9","#82C5D9","#82C3D9","#82C1D9","#82BFD9","#82BDD9","#82BBD9","#82B9D9","#82B7D9","#82B5D9","#82B3D9","#82B1D9","#82AFD9","#82ADD9","#82ABD9","#82A9D9","#82A7D9","#82A5D9","#82A3D9","#82A1D9","#829FD9","#829DD9","#829BD9","#8298D9","#8296D9","#8294D9","#8292D9","#8290D9","#828ED9","#828CD9","#828AD9","#8288D9","#8286D9","#8284D9","#8282D9","#8482D9","#8682D9","#8882D9","#8A82D9","#8C82D9","#8E82D9","#9082D9","#9282D9","#9482D9","#9682D9","#9882D9","#9B82D9","#9D82D9","#9F82D9","#A182D9","#A382D9","#A582D9","#A782D9","#A982D9","#AB82D9","#AD82D9","#AF82D9","#B182D9","#B382D9","#B582D9","#B782D9","#B982D9","#BB82D9","#BD82D9","#BF82D9","#C182D9","#C382D9","#C582D9","#C782D9","#C982D9","#CB82D9","#CE82D9","#D082D9","#D282D9","#D482D9","#D682D9","#D882D9","#D982D8","#D982D6","#D982D4","#D982D2","#D982D0","#D982CE","#D982CB","#D982C9","#D982C7","#D982C5","#D982C3","#D982C1","#D982BF","#D982BD","#D982BB","#D982B9","#D982B7","#D982B5","#D982B3","#D982B1","#D982AF","#D982AD","#D982AB","#D982A9","#D982A7","#D982A5","#D982A3","#D982A1","#D9829F","#D9829D","#D9829B","#D98298","#D98296","#D98294","#D98292","#D98290","#D9828E","#D9828C","#D9828A","#D98288","#D98286","#D98284"];

    var colorContainer = document.getElementById('color-container');

    colors.forEach(function( val, ind ) {
        var div = document.createElement('div');
        div.style.backgroundColor = val;
        div.setAttribute('data', val);
        colorContainer.appendChild(div);
    });

    document.addEventListener('scroll', function( ev ) {
        if( ((window.innerHeight + window.scrollY) - document.body.offsetHeight) >= -10 ) {
            window.scroll(0, 0);
        }
    });

    var down = false;

    var colorContainer = document.getElementById('color-container');

    var touchstart = function(ev){
        down = true;

        var timeout = setTimeout(function(){
            if(down){
                if(colorContainer.className.indexOf('animated') < 0){
                    colorContainer.className += 'animated';
                } else {
                    colorContainer.className = '';
                }
                clearTimeout(timeout);
            }
        }, 1000);
        ev.stopPropagation();
        ev.preventDefault();
        return false;
    };

    var touchend = function(){
        down = false;
    };

    document.addEventListener('touchstart', touchstart);

    document.addEventListener('touchend', touchend);

    document.addEventListener('mousedown', touchstart);

    document.addEventListener('mouseup', touchend);

})();

window.printKeyFrames = function(){
    var colors = ["#D98282","#D98782","#D98C82","#D99082","#D99582","#D99A82","#D99E82","#D9A382","#D9A882","#D9AD82","#D9B182","#D9B682","#D9BB82","#D9C082","#D9C482","#D9C982","#D9CE82","#D9D282","#D9D782","#D6D982","#D1D982","#CCD982","#C7D982","#C3D982","#BED982","#B9D982","#B4D982","#B0D982","#ABD982","#A6D982","#A2D982","#9DD982","#98D982","#93D982","#8FD982","#8AD982","#85D982","#82D984","#82D988","#82D98D","#82D992","#82D997","#82D99B","#82D9A0","#82D9A5","#82D9A9","#82D9AE","#82D9B3","#82D9B8","#82D9BC","#82D9C1","#82D9C6","#82D9CB","#82D9CF","#82D9D4","#82D9D9","#82D4D9","#82CFD9","#82CBD9","#82C6D9","#82C1D9","#82BCD9","#82B8D9","#82B3D9","#82AED9","#82A9D9","#82A5D9","#82A0D9","#829BD9","#8297D9","#8292D9","#828DD9","#8288D9","#8284D9","#8582D9","#8A82D9","#8F82D9","#9382D9","#9882D9","#9D82D9","#A282D9","#A682D9","#AB82D9","#B082D9","#B482D9","#B982D9","#BE82D9","#C382D9","#C782D9","#CC82D9","#D182D9","#D682D9","#D982D7","#D982D2","#D982CE","#D982C9","#D982C4","#D982C0","#D982BB","#D982B6","#D982B1","#D982AD","#D982A8","#D982A3","#D9829E","#D9829A","#D98295","#D98290","#D9828C","#D98287","#D98282"];
    var keyFrames = '';

    for(var i=0; i<=100; i++){
        var val  = 'linear-gradient(to bottom, ' + colors[i] + ' 0%,' + colors[i+10] + ' 100%)';
        keyFrames += i + '% { background: ' + val +'; }\n';
    }

    console.log(keyFrames);
};
