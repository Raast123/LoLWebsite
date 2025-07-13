function displayWelcome() {
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        const welcomeElement = document.getElementById('welcome-message');
        if (welcomeElement) {
            welcomeElement.innerHTML = "🎮 Welcome to the ultimate League of Legends Champions Hub! Discover your perfect champion and explore the world of competitive gaming! 🎮";
            welcomeElement.style.display = 'block';
        }
    }
}

function findChampion() {
    const championData = [
        { playstyle: "aggressive", champions: ["Yasuo", "Zed", "Riven", "Draven", "Katarina"] },
        { playstyle: "defensive", champions: ["Malphite", "Braum", "Shen", "Maokai", "Rammus"] },
        { playstyle: "supportive", champions: ["Thresh", "Lulu", "Janna", "Soraka", "Nami"] },
        { playstyle: "strategic", champions: ["Azir", "Orianna", "Twisted Fate", "Gangplank", "Ryze"] },
        { playstyle: "burst damage", champions: ["Annie", "Veigar", "LeBlanc", "Syndra", "Lux"] }
    ];
    
    const userInput = prompt("What's your preferred playstyle?\n\nOptions:\n- aggressive\n- defensive\n- supportive\n- strategic\n- burst damage");
    
    if (userInput) {
        const inputLower = userInput.toLowerCase().trim();
        const resultElement = document.getElementById('champion-result');
        
        const matchedPlaystyle = championData.find(data => 
            data.playstyle.includes(inputLower) || inputLower.includes(data.playstyle)
        );
        
        if (matchedPlaystyle) {
            const randomChampion = matchedPlaystyle.champions[Math.floor(Math.random() * matchedPlaystyle.champions.length)];
            resultElement.innerHTML = `
                <h3 style="color: #e75e8d; margin-bottom: 15px;">🏆 Perfect Match Found! 🏆</h3>
                <p><strong style="color: #e75e8d;">${randomChampion}</strong> suits your <em>${matchedPlaystyle.playstyle}</em> playstyle perfectly!</p>
                <p>This champion is ideal for players who prefer ${matchedPlaystyle.playstyle} gameplay. Start practicing and climb the ranked ladder!</p>
            `;
            resultElement.style.display = 'block';
        } else {
            const randomPlaystyle = championData[Math.floor(Math.random() * championData.length)];
            const randomChampion = randomPlaystyle.champions[Math.floor(Math.random() * randomPlaystyle.champions.length)];
            resultElement.innerHTML = `
                <h3 style="color: #e75e8d; margin-bottom: 15px;">🎯 Recommended Champion 🎯</h3>
                <p>Try <strong style="color: #e75e8d;">${randomChampion}</strong>! This champion offers a ${randomPlaystyle.playstyle} playstyle.</p>
                <p>Don't worry if it doesn't match exactly - experimenting with different champions is part of the learning process in League of Legends!</p>
            `;
            resultElement.style.display = 'block';
        }
    }
}

function filterChampions(role) {
    const championRows = document.querySelectorAll('.champion-row');
    
    championRows.forEach(row => {
        if (role === 'all' || row.getAttribute('data-role') === role) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.style.backgroundColor = '#1f2122';
        button.style.color = '#fff';
    });
    
    if (event && event.target) {
        event.target.style.backgroundColor = '#e75e8d';
        event.target.style.color = '#fff';
    }
}

function updateChampionCount() {
    const visibleRows = document.querySelectorAll('.champion-row[style*="table-row"], .champion-row:not([style*="none"])');
    console.log(`Displaying ${visibleRows.length} champions`);
}

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
