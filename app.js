document.getElementById('get-location').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            document.getElementById('location').textContent = `緯度: ${latitude}, 経度: ${longitude}`;
        }, function(error) {
            document.getElementById('location').textContent = '位置情報を取得できませんでした。';
        });
    } else {
        document.getElementById('location').textContent = 'このブラウザは位置情報取得に対応していません。';
    }
});

// Service Workerの登録
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
        console.log('Service Worker登録成功:', registration);
    }).catch(function(error) {
        console.log('Service Worker登録失敗:', error);
    });
}