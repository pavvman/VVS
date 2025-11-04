

function init() {

    var map = new ymaps.Map("map", {
        center: [48.012580647700226,37.873113717773435],
        zoom: 12,
        controls:['routePanelControl']
    });
}

ymaps.ready(init);