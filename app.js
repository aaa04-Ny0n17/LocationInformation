document.getElementById('get-location').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            
            // 位置情報を表示
            document.getElementById('location').textContent = `緯度: ${latitude}, 経度: ${longitude}`;
            
            // 逆ジオコーディングを使って住所を取得
            getAddressFromCoordinates(latitude, longitude);
        }, function(error) {
            document.getElementById('location').textContent = '位置情報を取得できませんでした。';
        });
    } else {
        document.getElementById('location').textContent = 'このブラウザは位置情報取得に対応していません。';
    }
});

// 逆ジオコーディングの関数
function getAddressFromCoordinates(latitude, longitude) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const address = data.display_name; // 住所
            document.getElementById('address').textContent = `住所: ${address}`;
        })
        .catch(error => {
            document.getElementById('address').textContent = '住所の取得に失敗しました。';
        });
}