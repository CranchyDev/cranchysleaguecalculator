window.displayChampions = displayChampions;

window.addEventListener("click", closeChampionsList);

let selectedLevel = 1;

// Base stats
let baseHP = 0;
let baseMP = 0;
let baseMoveSpeed = 0;
let baseArmor = 0;
let baseSpellBlock = 0;
let baseAttackRange = 0;
let baseHPRegen = 0;
let baseMPRegen = 0;
let baseCrit = 0;
let baseAttackDamage = 0;
let baseAttackSpeed = 0;

// Per-level growth stats
let growthHP = 0;
let growthMP = 0;
let growthArmor = 0;
let growthSpellBlock = 0;
let growthHPRegen = 0;
let growthMPRegen = 0;
let growthCrit = 0;
let growthAttackDamage = 0;
let growthAttackSpeed = 0;

let selectedLevel2 = 1;

// Base stats
let baseHP2 = 0;
let baseMP2 = 0;
let baseMoveSpeed2 = 0;
let baseArmor2 = 0;
let baseSpellBlock2 = 0;
let baseAttackRange2 = 0;
let baseHPRegen2 = 0;
let baseMPRegen2 = 0;
let baseCrit2 = 0;
let baseAttackDamage2 = 0;
let baseAttackSpeed2 = 0;

// Per-level growth stats
let growthHP2 = 0;
let growthMP2 = 0;
let growthArmor2 = 0;
let growthSpellBlock2 = 0;
let growthHPRegen2 = 0;
let growthMPRegen2 = 0;
let growthCrit2 = 0;
let growthAttackDamage2 = 0;
let growthAttackSpeed2 = 0;

function displayChampions() 
{
	if (document.getElementById("dropbtn").innerHTML == "Expand")
	{
		if (document.getElementById("levelList").classList.contains("show"))
		{
			document.getElementById("levelList").classList.remove("show")
			document.getElementById("levelbtn").innerHTML = "Level";
		}
		document.getElementById("dropbtn").innerHTML = "Unpack";
		document.getElementById("championsList").classList.add("show");
	}
	else if (document.getElementById("dropbtn").innerHTML == "Unpack")
	{
		document.getElementById("dropbtn").innerHTML = "Expand";

		if (document.getElementById("championsList").classList.contains("show")) 
		{
			document.getElementById("championsList").classList.remove("show");
		}
	}
}

function displayChampions2() 
{
    if (document.getElementById("dropbtn2").innerHTML == "Expand") {
        document.getElementById("dropbtn2").innerHTML = "Unpack";
        document.getElementById("championsList2").classList.add("show");
    } 
    else if (document.getElementById("dropbtn2").innerHTML == "Unpack") {
        document.getElementById("dropbtn2").innerHTML = "Expand";

        if (document.getElementById("championsList2").classList.contains("show")) {
            document.getElementById("championsList2").classList.remove("show");
        }
    }
}

function displayLevel()
{
	if (document.getElementById("levelbtn").innerHTML.startsWith("Level"))
	{
		document.getElementById("levelbtn").innerHTML = "Select Level";
		document.getElementById("levelList").classList.add("show");
	}
	else if (document.getElementById("levelbtn").innerHTML == "Select Level")
	{
		document.getElementById("levelbtn").innerHTML = "Level";
		document.getElementById("levelList").classList.remove("show")
	}
	else
	{

	}
}

function displayLevel2()
{
	if (document.getElementById("levelbtn2").innerHTML.startsWith("Level"))
	{
		document.getElementById("levelbtn2").innerHTML = "Select Level";
		document.getElementById("levelList2").classList.add("show");
	}
	else if (document.getElementById("levelbtn2").innerHTML == "Select Level")
	{
		document.getElementById("levelbtn2").innerHTML = "Level";
		document.getElementById("levelList2").classList.remove("show")
	}
	else
	{

	}
}

function closeChampionsList(event)
{
	// If a champion was clicked
	if (event.target.classList.contains("selectedChampion")) 
	{
		if (document.getElementById("levelList").classList.contains("show"))
		{
			document.getElementById("levelList").classList.remove("show");
		}
		const nameDisplay = event.target.innerHTML;
		document.getElementById("putSomethingHere").innerHTML = nameDisplay;
		document.getElementById("championsList").classList.remove("show");
		document.getElementById("menu-image").style.display = "block";
		document.getElementById("menu-image").src = "imgs/" + nameDisplay + ".jpg";
		document.getElementById("dropbtn").innerHTML = "Expand";
		
		let name = event.target.innerHTML.replace(/\s+/g, "").replace(/'/g, "").replace(/\./g, ""); // Removes spaces, ' and .

		// For specific cases where capital letters are still left (the .JSON files are very specific).
		if (name === "ChoGath") name = "Chogath";
		if (name === "BelVeth") name = "Belveth";
		if (name === "KhaZix") name = "Khazix";
		if (name === "Wukong") name = "MonkeyKing";
		if (name === "VelKoz") name = "Velkoz";
		if (name === "NunuandWillump") name = "Nunu";

		fetch(`championstats/${name}.json`)
		.then(response => response.json())
		.then(data => {
		console.log(data.data[name].stats);

			baseHP = parseFloat(data.data[name].stats.hp);
			baseMP = parseFloat(data.data[name].stats.mp);
			baseMoveSpeed = parseFloat(data.data[name].stats.movespeed);
			baseArmor = parseFloat(data.data[name].stats.armor);
			baseSpellBlock = parseFloat(data.data[name].stats.spellblock);
			baseAttackRange = parseFloat(data.data[name].stats.attackrange);
			baseHPRegen = parseFloat(data.data[name].stats.hpregen);
			baseMPRegen = parseFloat(data.data[name].stats.mpregen);
			baseCrit = parseFloat(data.data[name].stats.crit);
			baseAttackDamage = parseFloat(data.data[name].stats.attackdamage);
			baseAttackSpeed = parseFloat(data.data[name].stats.attackspeed);

			growthHP = parseFloat(data.data[name].stats.hpperlevel);
			growthMP = parseFloat(data.data[name].stats.mpperlevel);
			growthArmor = parseFloat(data.data[name].stats.armorperlevel);
			growthSpellBlock = parseFloat(data.data[name].stats.spellblockperlevel);
			growthHPRegen = parseFloat(data.data[name].stats.hpregenperlevel);
			growthMPRegen = parseFloat(data.data[name].stats.mpregenperlevel);
			growthCrit = parseFloat(data.data[name].stats.critperlevel);
			growthAttackDamage = parseFloat(data.data[name].stats.attackdamageperlevel);
			growthAttackSpeed = parseFloat(data.data[name].stats.attackspeedperlevel);

			document.getElementById("hereAttackDamage").innerHTML = baseAttackDamage;
			// document.getElementById("hereAbilityPower").innerHTML = data.data[name].stats.attackdamage;
			document.getElementById("hereAttackSpeed").innerHTML = baseAttackSpeed;
			document.getElementById("hereCriticalChance").innerHTML = baseCrit;
			document.getElementById("hereHealthPoints").innerHTML = baseHP;
			document.getElementById("hereHealthRegen").innerHTML = baseHPRegen;
			document.getElementById("hereManaPoints").innerHTML = baseMP;
			document.getElementById("hereManaRegen").innerHTML = baseMPRegen;
			document.getElementById("hereArmor").innerHTML = baseArmor;
			document.getElementById("hereMagicResistance").innerHTML = baseSpellBlock;

			// document.getElementById("hereAbilityHaste").innerHTML = ;

			document.getElementById("hereMovementSpeed").innerHTML = baseMoveSpeed;

			 attackDamagePerLevel = data.data[name].stats.attackdamageperlevel;
		})
		.catch(error => console.error(error));

		return;
	}
	else if (event.target.classList.contains("selectedChampion2"))
	{
		const nameDisplay = event.target.innerHTML;
		document.getElementById("putSomethingHere2").innerHTML = nameDisplay;
		document.getElementById("championsList2").classList.remove("show");
		document.getElementById("menu-image2").style.display = "block";
		document.getElementById("menu-image2").src = "imgs/" + nameDisplay + ".jpg";
		document.getElementById("dropbtn2").innerHTML = "Expand";

		let name = event.target.innerHTML.replace(/\s+/g, "").replace(/'/g, "").replace(/\./g, ""); // Removes spaces, ' and .

		// For specific cases where capital letters are still left (the .JSON files are very specific).
		if (name === "ChoGath") name = "Chogath";
		if (name === "BelVeth") name = "Belveth";
		if (name === "KhaZix") name = "Khazix";
		if (name === "Wukong") name = "MonkeyKing";
		if (name === "VelKoz") name = "Velkoz";
		if (name === "NunuandWillump") name = "Nunu";


		fetch(`championstats/${name}.json`)
		.then(response => response.json())
		.then(data => {
			 console.log(data.data[name].stats);

			baseHP2 = parseFloat(data.data[name].stats.hp);
			baseMP2 = parseFloat(data.data[name].stats.mp);
			baseMoveSpeed2 = parseFloat(data.data[name].stats.movespeed);
			baseArmor2 = parseFloat(data.data[name].stats.armor);
			baseSpellBlock2 = parseFloat(data.data[name].stats.spellblock);
			baseAttackRange2 = parseFloat(data.data[name].stats.attackrange);
			baseHPRegen2 = parseFloat(data.data[name].stats.hpregen);
			baseMPRegen2 = parseFloat(data.data[name].stats.mpregen);
			baseCrit2 = parseFloat(data.data[name].stats.crit);
			baseAttackDamage2 = parseFloat(data.data[name].stats.attackdamage);
			baseAttackSpeed2 = parseFloat(data.data[name].stats.attackspeed);

			growthHP2 = parseFloat(data.data[name].stats.hpperlevel);
			growthMP2 = parseFloat(data.data[name].stats.mpperlevel);
			growthArmor2 = parseFloat(data.data[name].stats.armorperlevel);
			growthSpellBlock2 = parseFloat(data.data[name].stats.spellblockperlevel);
			growthHPRegen2 = parseFloat(data.data[name].stats.hpregenperlevel);
			growthMPRegen2 = parseFloat(data.data[name].stats.mpregenperlevel);
			growthCrit2 = parseFloat(data.data[name].stats.critperlevel);
			growthAttackDamage2 = parseFloat(data.data[name].stats.attackdamageperlevel);
			growthAttackSpeed2 = parseFloat(data.data[name].stats.attackspeedperlevel);

			document.getElementById("hereAttackDamage2").innerHTML = baseAttackDamage2;
			// document.getElementById("hereAbilityPower2").innerHTML = data.data[name].stats.attackdamage;
			document.getElementById("hereAttackSpeed2").innerHTML = baseAttackSpeed2;
			document.getElementById("hereCriticalChance2").innerHTML = baseCrit2;
			document.getElementById("hereHealthPoints2").innerHTML = baseHP2;
			document.getElementById("hereHealthRegen2").innerHTML = baseHPRegen2;
			document.getElementById("hereManaPoints2").innerHTML = baseMP2;
			document.getElementById("hereManaRegen2").innerHTML = baseMPRegen2;
			document.getElementById("hereArmor2").innerHTML = baseArmor2;
			document.getElementById("hereMagicResistance2").innerHTML = baseSpellBlock2;

			// document.getElementById("hereAbilityHaste2").innerHTML = ;

			document.getElementById("hereMovementSpeed2").innerHTML = baseMoveSpeed2;
		})
		.catch(error => console.error(error));

		return;
	}
	else
	{

	}

	if (event.target !== document.getElementById("dropbtn") && !document.getElementById("championsList").contains(event.target))
	{

		if (document.getElementById("championsList").classList.contains("show"))
		{
			document.getElementById("championsList").classList.remove("show");
			document.getElementById("dropbtn").innerHTML = "Expand"; 
		}
	}
}

function calculateStatsWithLevel(level)
{
	selectedLevel = parseInt(level.textContent.trim());
	console.log("Selected level:", selectedLevel);

	document.getElementById("hereAttackDamage").textContent = "0";
	document.getElementById("hereAttackDamage").textContent = Math.round(baseAttackDamage + growthAttackDamage * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

	document.getElementById("hereAttackSpeed").textContent = "0";
	document.getElementById("hereAttackSpeed").textContent = (baseAttackSpeed * (1 + (growthAttackSpeed / 100) * ((selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1))))).toFixed(3);

	document.getElementById("hereCriticalChance").textContent = "0";
	document.getElementById("hereCriticalChance").textContent = Math.round(baseCrit + growthCrit * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

	document.getElementById("hereHealthPoints").textContent = "0";
	document.getElementById("hereHealthPoints").textContent = Math.round(baseHP + growthHP * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

	document.getElementById("hereHealthRegen").textContent = "0";
	document.getElementById("hereHealthRegen").textContent = Math.round(baseHPRegen + growthHPRegen * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

	document.getElementById("hereManaPoints").textContent = "0";
	document.getElementById("hereManaPoints").textContent = Math.round(baseMP + growthMP * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

	document.getElementById("hereManaRegen").textContent = "0";
	document.getElementById("hereManaRegen").textContent = Math.round(baseMPRegen + growthMPRegen * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

	document.getElementById("hereArmor").textContent = "0";
	document.getElementById("hereArmor").textContent = Math.round(baseArmor + growthArmor * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));

	document.getElementById("hereMagicResistance").textContent = "0";
	document.getElementById("hereMagicResistance").textContent = Math.round(baseSpellBlock + growthSpellBlock * (selectedLevel - 1) * (0.7025 + 0.0175 * (selectedLevel - 1)));



	document.getElementById("levelList").classList.remove("show");
	document.getElementById("levelbtn").innerHTML = "Level "+ selectedLevel +"";

	compareCalculationsBetweenChampionStats();
}

function calculateStatsWithLevelAgain(level)
{
	selectedLevel2 = parseInt(level.textContent.trim());
	console.log("Selected level:", selectedLevel2);

	document.getElementById("hereAttackDamage2").textContent = "0";
	document.getElementById("hereAttackDamage2").textContent = Math.round(baseAttackDamage2 + growthAttackDamage2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

	document.getElementById("hereAttackSpeed2").textContent = "0";
	document.getElementById("hereAttackSpeed2").textContent = (baseAttackSpeed2 * (1 + (growthAttackSpeed2 / 100) * ((selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1))))).toFixed(3);

	document.getElementById("hereCriticalChance2").textContent = "0";
	document.getElementById("hereCriticalChance2").textContent = Math.round(baseCrit2 + growthCrit2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

	document.getElementById("hereHealthPoints2").textContent = "0";
	document.getElementById("hereHealthPoints2").textContent = Math.round(baseHP2 + growthHP2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

	document.getElementById("hereHealthRegen2").textContent = "0";
	document.getElementById("hereHealthRegen2").textContent = Math.round(baseHPRegen2 + growthHPRegen2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

	document.getElementById("hereManaPoints2").textContent = "0";
	document.getElementById("hereManaPoints2").textContent = Math.round(baseMP2 + growthMP2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

	document.getElementById("hereManaRegen2").textContent = "0";
	document.getElementById("hereManaRegen2").textContent = Math.round(baseMPRegen2 + growthMPRegen2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

	document.getElementById("hereArmor2").textContent = "0";
	document.getElementById("hereArmor2").textContent = Math.round(baseArmor2 + growthArmor2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

	document.getElementById("hereMagicResistance2").textContent = "0";
	document.getElementById("hereMagicResistance2").textContent = Math.round(baseSpellBlock2 + growthSpellBlock2 * (selectedLevel2 - 1) * (0.7025 + 0.0175 * (selectedLevel2 - 1)));

	document.getElementById("levelList2").classList.remove("show");
	document.getElementById("levelbtn2").innerHTML = "Level "+ selectedLevel2 +"";

	compareCalculationsBetweenChampionStats();
}

function compareCalculationsBetweenChampionStats()
{
	const ad1 = parseFloat(document.getElementById("hereAttackDamage").textContent.trim());
	const ad2 = parseFloat(document.getElementById("hereAttackDamage2").textContent.trim());

	const ar1 = parseFloat(document.getElementById("hereArmor").textContent.trim());
	const ar2 = parseFloat(document.getElementById("hereArmor2").textContent.trim());

	const mr1 = parseFloat(document.getElementById("hereMagicResistance").textContent.trim());
	const mr2 = parseFloat(document.getElementById("hereMagicResistance2").textContent.trim());

	const as1 = parseFloat(document.getElementById("hereAttackSpeed").textContent.trim());
	const as2 = parseFloat(document.getElementById("hereAttackSpeed2").textContent.trim());

	const ms1 = parseFloat(document.getElementById("hereMovementSpeed").textContent.trim());
	const ms2 = parseFloat(document.getElementById("hereMovementSpeed2").textContent.trim());

	const hp1 = parseFloat(document.getElementById("hereHealthPoints").textContent.trim());
	const hp2 = parseFloat(document.getElementById("hereHealthPoints2").textContent.trim());

	const hpRegen1 = parseFloat(document.getElementById("hereHealthRegen").textContent.trim());
	const hpRegen2 = parseFloat(document.getElementById("hereHealthRegen2").textContent.trim());

	const mp1 = parseFloat(document.getElementById("hereManaPoints").textContent.trim());
	const mp2 = parseFloat(document.getElementById("hereManaPoints2").textContent.trim());

	const mpRegen1 = parseFloat(document.getElementById("hereManaRegen").textContent.trim());
	const mpRegen2 = parseFloat(document.getElementById("hereManaRegen2").textContent.trim());

	if (ad1 > ad2)
	{
		document.getElementById("hereAttackDamage").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereAttackDamage2").style.backgroundColor = "#FF7F7F";
	}
	else if (ad1 < ad2)
	{
		document.getElementById("hereAttackDamage2").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereAttackDamage").style.backgroundColor = "#FF7F7F";
	}
	else
	{
		document.getElementById("hereAttackDamage").style.backgroundColor = "";
		document.getElementById("hereAttackDamage2").style.backgroundColor = "";
	}

	if (ar1 > ar2)
	{
		document.getElementById("hereArmor").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereArmor2").style.backgroundColor = "#FF7F7F";
	}
	else if (ar1 < ar2)
	{
		document.getElementById("hereArmor2").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereArmor").style.backgroundColor = "#FF7F7F";
	}
	else
	{
		document.getElementById("hereArmor").style.backgroundColor = "";
		document.getElementById("hereArmor2").style.backgroundColor = "";
	}


	if (mr1 > mr2)
	{
		document.getElementById("hereMagicResistance").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereMagicResistance2").style.backgroundColor = "#FF7F7F";
	}
	else if (mr1 < mr2)
	{
		document.getElementById("hereMagicResistance2").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereMagicResistance").style.backgroundColor = "#FF7F7F";
	}
	else
	{
		document.getElementById("hereMagicResistance").style.backgroundColor = "";
		document.getElementById("hereMagicResistance2").style.backgroundColor = "";
	}


	if (as1 > as2)
	{
		document.getElementById("hereAttackSpeed").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereAttackSpeed2").style.backgroundColor = "#FF7F7F";
	}
	else if (as1 < as2)
	{
		document.getElementById("hereAttackSpeed2").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereAttackSpeed").style.backgroundColor = "#FF7F7F";
	}
	else
	{
		document.getElementById("hereAttackSpeed").style.backgroundColor = "";
		document.getElementById("hereAttackSpeed2").style.backgroundColor = "";
	}


	if (ms1 > ms2)
	{
		document.getElementById("hereMovementSpeed").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereMovementSpeed2").style.backgroundColor = "#FF7F7F";
	}
	else if (ms1 < ms2)
	{
		document.getElementById("hereMovementSpeed2").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereMovementSpeed").style.backgroundColor = "#FF7F7F";
	}
	else
	{
		document.getElementById("hereMovementSpeed").style.backgroundColor = "";
		document.getElementById("hereMovementSpeed2").style.backgroundColor = "";
	}

	if (hp1 > hp2)
	{
		document.getElementById("hereHealthPoints").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereHealthPoints2").style.backgroundColor = "#FF7F7F";
	}
	else if (hp1 < hp2)
	{
		document.getElementById("hereHealthPoints2").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereHealthPoints").style.backgroundColor = "#FF7F7F";
	}
	else
	{
		document.getElementById("hereHealthPoints").style.backgroundColor = "";
		document.getElementById("hereHealthPoints2").style.backgroundColor = "";
	}

	if (hpRegen1 > hpRegen2)
	{
		document.getElementById("hereHealthRegen").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereHealthRegen2").style.backgroundColor = "#FF7F7F";
	}
	else if (hpRegen1 < hpRegen2)
	{
		document.getElementById("hereHealthRegen2").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereHealthRegen").style.backgroundColor = "#FF7F7F";
	}
	else
	{
		document.getElementById("hereHealthRegen").style.backgroundColor = "";
		document.getElementById("hereHealthRegen2").style.backgroundColor = "";
	}

	if (mp1 > mp2)
	{
		document.getElementById("hereManaPoints").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereManaPoints2").style.backgroundColor = "#FF7F7F";
	}
	else if (mp1 < mp2)
	{
		document.getElementById("hereManaPoints2").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereManaPoints").style.backgroundColor = "#FF7F7F";
	}
	else
	{
		document.getElementById("hereManaPoints").style.backgroundColor = "";
		document.getElementById("hereManaPoints2").style.backgroundColor = "";
	}

	if (mpRegen1 > mpRegen2)
	{
		document.getElementById("hereManaRegen").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereManaRegen2").style.backgroundColor = "#FF7F7F";
	}
	else if (mpRegen1 < mpRegen2)
	{
		document.getElementById("hereManaRegen2").style.backgroundColor = "#8fbc8f";
		document.getElementById("hereManaRegen").style.backgroundColor = "#FF7F7F";
	}
	else
	{
		document.getElementById("hereManaRegen").style.backgroundColor = "";
		document.getElementById("hereManaRegen2").style.backgroundColor = "";
	}
}
