(async function initDashboard() {
    let authorLink = "";

    try {
        const res = await fetch("https://apis.scrimba.com/nsplash/photos/random?orientation=landscape&query=nature");
        const data = await res.json();
        authorLink = data.user.links.html;

        document.body.style.backgroundImage = `url(${data.urls.regular})`;
        document.getElementById("author").textContent = `By: ${data.user.name}`;
    } catch (err) {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080)`;
        document.getElementById("author").textContent = `By: Dodi Achmad`;
    }
    document.getElementById("author").addEventListener("click", () => {
        if (authorLink) {
            window.open(authorLink, "_blank");
        }
    });

    try {
        const res = await fetch("https://api.github.com/users/niha1434/repos?sort=updated&per_page=3");
        if (!res.ok) throw Error("GitHub data unavailable");
        const repos = await res.json();

        const topRepos = repos
            .map(
                repo => `
                <div class="repo">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    <p>${repo.language || "Unknown"}</p>
                </div>
            `
            )
            .join("");

        document.getElementById("gitHub").innerHTML = `
            <h3>🧑‍💻 Latest Repos</h3>
            ${topRepos}
        `;
    } catch (err) {
        console.error("GitHub fetch failed:", err);
        document.getElementById("gitHub").innerHTML = `<p>GitHub data unavailable</p>`;
    }

    function getCurrentTime() {
        const date = new Date();
        document.getElementById("time").textContent = date.toLocaleTimeString("en-us", { timeStyle: "short" });
    }
    setInterval(getCurrentTime, 1000);
    getCurrentTime();

    try {
        const res = await fetch("https://zenquotes.io/api/random");
        const data = await res.json();
        document.getElementById("quote-text").textContent = `"${data[0].q}"`;
        document.getElementById("quote-author").textContent = `- ${data[0].a}`;
    } catch (err) {
        console.error("Quote fetch failed:", err);
        document.getElementById("quote-text").textContent = `"Stay positive, work hard, make it happen."`;
        document.getElementById("quote-author").textContent = `- Unknown`;
    }


    navigator.geolocation.getCurrentPosition(async position => {
        try {
            const res = await fetch(
                `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`
            );
            if (!res.ok) throw Error("Weather data not available");
            const data = await res.json();
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}ºC</p>
                <p class="weather-city">${data.name}</p>
            `;
        } catch (err) {
            console.error("Weather fetch failed:", err);
            document.getElementById("weather").textContent = "Weather data unavailable";
        }
    });
})();
