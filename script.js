function gerarRG() {
    const profilePhoto = document.getElementById("profilePhoto").files[0];
    const robloxNick = document.getElementById("robloxNick").value;
    const rpName = document.getElementById("rpName").value;
    const rpAge = document.getElementById("rpAge").value;
    const education = document.getElementById("education").value;

    if (profilePhoto && robloxNick && rpName && rpAge && education) {
        // Exibir informações do RG
        document.getElementById("displayNick").textContent = robloxNick;
        document.getElementById("displayName").textContent = rpName;
        document.getElementById("displayAge").textContent = rpAge;
        document.getElementById("displayEducation").textContent = education;

        // Gerar número de série aleatório
        const seriesNumber = Math.floor(100000000 + Math.random() * 900000000);
        document.getElementById("displaySeriesNumber").textContent = seriesNumber;

        // Definir a data de emissão como a data atual
        const issueDate = new Date().toLocaleDateString('pt-BR');
        document.getElementById("displayIssueDate").textContent = issueDate;

        // Colocar a assinatura como o nome no RP
        document.getElementById("signature").textContent = rpName;

        // Exibir a foto de perfil carregada
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("rgPhoto").src = e.target.result;
        };
        reader.readAsDataURL(profilePhoto);

        // Mostrar o RG
        document.getElementById("rgDisplay").style.display = "block";
    } else {
        alert("Por favor, preencha todos os campos!");
    }
}
