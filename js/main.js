var mymap = L.map('mapa').setView([21.15223412617155, -101.7113883047542], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    zoom: 16,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

document.getElementById('submitButton').addEventListener('click', function (e) {
    var button = document.getElementById('submitButton');
    var inputValue = document.getElementById('input');

    if (button.className === 'venecia') {
        var lugares = [];

        if (inputValue.value < 5000) {
            lugares.push(
                L.latLng(45.43620026182024, 12.327949107842572),
                L.latLng(45.434381416634466, 12.338057353923379),
                L.latLng(45.434643394475046, 12.339648024479976)
            );
        } else if (inputValue.value < 12000) {
            lugares.push(
                L.latLng(45.43620026182024, 12.327949107842572),
                L.latLng(45.434381416634466, 12.338057353923379),
                L.latLng(45.434643394475046, 12.339648024479976),
                L.latLng(45.43383899715985, 12.340443041676037)
            );
        } else {
            lugares.push(
                L.latLng(45.43620026182024, 12.327949107842572),
                L.latLng(45.434381416634466, 12.338057353923379),
                L.latLng(45.434643394475046, 12.339648024479976),
                L.latLng(45.43383899715985, 12.340443041676037),
                L.latLng(45.438082045864185, 12.33595164167623),
                L.latLng(45.433555896070814, 12.337362339823938)
            );
        }
        L.Routing.control({
            waypoints: lugares,
        }).addTo(mymap);
    } else if (button.className === 'turin') {
        var lugares = [];

        if (inputValue.value < 5000) {
            lugares.push(
                L.latLng(45.07089060365822, 7.6937468839899115),
                L.latLng(45.06916301236515, 7.693285544041282),
                L.latLng(45.069058751984024, 7.685651670497871)
            );
        } else if (inputValue.value < 12000) {
            lugares.push(
                L.latLng(45.07089060365822, 7.6937468839899115),
                L.latLng(45.06916301236515, 7.693285544041282),
                L.latLng(45.069058751984024, 7.685651670497871),
                L.latLng(45.075249920441756, 7.684642282137931)
            );
        } else {
            lugares.push(
                L.latLng(45.07089060365822, 7.6937468839899115),
                L.latLng(45.06916301236515, 7.693285544041282),
                L.latLng(45.069058751984024, 7.685651670497871),
                L.latLng(45.075249920441756, 7.684642282137931),
                L.latLng(45.05480588014161, 7.686774200437327),
                L.latLng(45.06495831368465, 7.695246039809571)
            );
        }
        L.Routing.control({
            waypoints: lugares,
        }).addTo(mymap);
    } else if (button.className === 'roma') {
        var lugares = [];

        if (inputValue.value < 5000) {
            lugares.push(
                L.latLng(41.890298034191545, 12.492187982018088),
                L.latLng(41.893348569437684, 12.485407318111905),
                L.latLng(41.90142759782744, 12.483012592591585)
            );
        } else if (inputValue.value < 12000) {
            lugares.push(
                L.latLng(41.890298034191545, 12.492187982018088),
                L.latLng(41.893348569437684, 12.485407318111905),
                L.latLng(41.90142759782744, 12.483012592591585),
                L.latLng(41.90309849837457, 12.454504955034633)
            );
        } else {
            lugares.push(
                L.latLng(41.890298034191545, 12.492187982018088),
                L.latLng(41.893348569437684, 12.485407318111905),
                L.latLng(41.90142759782744, 12.483012592591585),
                L.latLng(41.90309849837457, 12.454504955034633),
                L.latLng(41.90592191604274, 12.482335243556607),
                L.latLng(41.899292493122545, 12.473270639690453)
            );
        }
        /* var myIcon = L.icon({
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/4515/4515076.png',
            iconSize: [38, 95],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
            shadowSize: [68, 95],
            shadowAnchor: [22, 94]
        }); */
        L.Routing.control({
            waypoints: lugares,
        }/* ,{icon: myIcon} */).addTo(mymap);
    } else if (button.className === 'pisa') {
        var lugares = [];

        if (inputValue.value < 5000) {
            lugares.push(
                L.latLng(43.72235421647787, 10.523618446032177),
                L.latLng(43.72306052978776, 10.396650641610227),
                L.latLng(43.723403511440644, 10.394713068594129)
            );
        } else if (inputValue.value < 12000) {
            lugares.push(
                L.latLng(43.72235421647787, 10.523618446032177),
                L.latLng(43.72306052978776, 10.396650641610227),
                L.latLng(43.723403511440644, 10.394713068594129),
                L.latLng(43.724071460493164, 10.394902045578092)
            );
        } else {
            lugares.push(
                L.latLng(43.72235421647787, 10.523618446032177),
                L.latLng(43.72306052978776, 10.396650641610227),
                L.latLng(43.723403511440644, 10.394713068594129),
                L.latLng(43.724071460493164, 10.394902045578092),
                L.latLng(43.71959472277826, 10.39996942441392),
                L.latLng(43.71600155165857, 10.401834910921847)
            );
        }
        L.Routing.control({
            waypoints: lugares,
        }).addTo(mymap);
    } else if (button.className === 'millan') {
        var lugares = [];

        if (inputValue.value < 5000) {
            lugares.push(
                L.latLng(45.464217974721365, 9.19189431098911),
                L.latLng(45.46601071098867, 9.189930616545555),
                L.latLng(45.466633686997795, 9.190153668661242)
            );
        } else if (inputValue.value < 12000) {
            lugares.push(
                L.latLng(45.464217974721365, 9.19189431098911),
                L.latLng(45.46601071098867, 9.189930616545555),
                L.latLng(45.466633686997795, 9.190153668661242),
                L.latLng(45.47110267439344, 9.18920465516949)
            );
        } else {
            lugares.push(
                L.latLng(45.464217974721365, 9.19189431098911),
                L.latLng(45.46601071098867, 9.189930616545555),
                L.latLng(45.466633686997795, 9.190153668661242),
                L.latLng(45.47110267439344, 9.18920465516949),
                L.latLng(45.472172665555554, 9.187825226333501),
                L.latLng(45.47057398949425, 9.179278853317395)
            );
        }
        L.Routing.control({
            waypoints: lugares,
        }).addTo(mymap);
    } else if (button.className === 'florencia') {
        var lugares = [];

        if (inputValue.value < 5000) {
            lugares.push(
                L.latLng(43.773593420695434, 11.256560826268107),
                L.latLng(43.76977844994817, 11.255760214628111),
                L.latLng(43.769432888596114, 11.256279643464099)
            );
        } else if (inputValue.value < 12000) {
            lugares.push(
                L.latLng(43.773593420695434, 11.256560826268107),
                L.latLng(43.76977844994817, 11.255760214628111),
                L.latLng(43.769432888596114, 11.256279643464099),
                L.latLng(43.76812642165878, 11.253186412775886)
            );
        } else {
            lugares.push(
                L.latLng(43.773593420695434, 11.256560826268107),
                L.latLng(43.76977844994817, 11.255760214628111),
                L.latLng(43.769432888596114, 11.256279643464099),
                L.latLng(43.76812642165878, 11.253186412775886),
                L.latLng(43.76804125666785, 11.255407356956011),
                L.latLng(43.7769926518377, 11.258674583940262)
            );
        }
        L.Routing.control({
            waypoints: lugares,
        }).addTo(mymap);
    }
});