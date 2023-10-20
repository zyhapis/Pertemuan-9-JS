class Hero {
    constructor(nama, role, tipe, stat, skill, rekomendasiItem, lore, ultimateLore, quotes, emblem, spesialSkill) {
        this.nama = nama;
        this.role = role; // Peran hero (Mage, Assassin, Tank, dsb.)
        this.tipe = tipe; // Tipe hero (Melee, Ranged, dsb.)
        this.stat = stat; // Objek yang berisi statistik (HP, attack, defense, dsb.)
        this.skill = skill; // Array yang berisi detail skill-skill hero
        this.rekomendasiItem = rekomendasiItem; // Array yang berisi rekomendasi item-item untuk hero
        this.lore = lore; // Latar belakang cerita hero
        this.ultimateLore = ultimateLore; // Latar belakang cerita ultimate skill hero
        this.quotes = quotes; // Kutipan terkenal hero
        this.emblem = emblem; // Emblem yang cocok untuk hero
        this.spesialSkill = spesialSkill; // Skill khusus hero
    }
}

const miya = new Hero(
    "Miya", 
    "Marksman", 
    "Ranged", 
    {
        HP: 2099,
        attack: 115,
        defense: 77,
        speed: 245,
        attackSpeed: 19,
        magicPower: 0,
        physicalPenetration: 0,
        lifesteal: 10,
        manaRegen: 15,
        cooldownReduction: 0,
        critChance: 5,
        moveSpeed: 240,
    }, 
    [
        {
            nama: "Skill 1: Fission Shot",
            efek: "Melepaskan serangkaian tembakan cepat ke musuh di depan, menghasilkan kerusakan fisik.",
            damage: "Kerugian Fisik +260",
        },
        {
            nama: "Skill 2: Rain of Arrows",
            efek: "Melepaskan hujan panah di lokasi target, menghasilkan kerusakan area kepada musuh yang terkena.",
            damage: "Kerugian Fisik +320",
        },
        {
            nama: "Ultimate: Turbo Stealth",
            efek: "Mengaktifkan kemampuan bergerak cepat dan membuat diri sendiri dan teman di sekitar tidak terlihat oleh musuh.",
            damage: "Tidak ada kerusakan.",
        }
    ], 
    [
        {
            nama: "Swift Boots",
            detail: "Attack Speed +15%, Move Speed +40.",
        },
        {
            nama: "Endless Battle",
            detail: "Attack +65, Lifesteal +15%, Physical Penetration +20, Unique Passive: Divine Justice - Deals extra true damage equal to 85% of physical attack to the next basic attack after using a skill.",
        },
        {
            nama: "Demon Hunter Sword",
            detail: "Attack +35, Lifesteal +12%, Unique Passive: Devour - Lowers target's physical defense by 25 for 2 seconds.",
        },
        {
            nama: "Windtalker",
            detail: "Attack Speed +40%, Movement Speed +20%, Critical Chance +20%.",
        },
        {
            nama: "Berserker's Fury",
            detail: "Attack +65, Critical Rate +25%, Unique Passive: Doom - Increases critical damage by 50%.",
        }
    ], 
    "Miya adalah seorang Marksman yang handal dalam menghasilkan tembakan cepat dan mengendalikan hujan panah.",
    "Ultimate skill Miya, Turbo Stealth, memungkinkan Miya dan teman-temannya untuk bergerak cepat dan tidak terlihat oleh musuh.",
    "Miya: 'Panahku tak terkalahkan!'",
    "Marksman Emblem", 
    "Kemampuan spesial: Fission Shot"
);


const balmond = new Hero(
    "Balmond", 
    "Fighter", 
    "Melee", 
    {
        HP: 2850,
        attack: 123,
        defense: 24,
        speed: 260,
        attackSpeed: 10,
        magicPower: 0,
        physicalPenetration: 0,
        lifesteal: 0,
        manaRegen: 15,
        cooldownReduction: 0,
        critChance: 0,
        moveSpeed: 260,
    }, 
    [
        {
            nama: "Skill 1: Soul Lock",
            efek: "Menyerang musuh dengan cepat dan mengunci musuh dalam jarak terdekat.",
            damage: "Kerugian Fisik +250, Menambahkan efek Slow",
        },
        {
            nama: "Skill 2: Cyclone Sweep",
            efek: "Memutar dengan cepat dan memberikan serangan Area of Effect (AoE) pada musuh di sekitarnya.",
            damage: "Kerugian Fisik +150, AoE Damage",
        },
        {
            nama: "Ultimate: Lethal Counter",
            efek: "Menghadapi serangan musuh dengan serangan balasan yang kuat. Jika musuh terluka, serangan balasan lebih kuat.",
            damage: "Kerugian Fisik +400, Serangan Balasan +100%",
        }
    ], 
    [
        {
            nama: "Warrior Boots",
            detail: "HP +22%, Armor +880, Unique Passive: Valor - Physical Defense will go up 3 with each basic attack received, for an increase of up to 15 points. Item passives will be adjusted."
        },
        {
            nama: "Bloodlust Axe",
            detail: "Attack +70, Physical Lifesteal +20%, Unique Passive: Bloodthirsty King - When abilities cause damage, the hero will heal 10% of the damage dealt as HP."
        },
        {
            nama: "Brute Force Breastplate",
            detail: "HP +770, Physical Defense +40, Unique Passive: Brute Force - Basic attacks will increase hero's movement speed by 3%, lasting 4s."
        },
        {
            nama: "Blade of Despair",
            detail: "Attack +170, Attack Speed +5%, Unique Passive: Despair - Deals extra 10% damage to an enemy in any abnormal state (stunned, knocked airborne, transformed, disabled)."
        },
        {
            nama: "Athena's Shield",
            detail: "HP +900, Magical Defense +56, Unique Passive: Shield - Gains a damage-absorbing shield every 30s. Shield absorption amount grows as the match goes on, maxing out at 1150."
        }
    ], 
    "Balmond adalah seorang Fighter yang unggul dalam pertempuran jarak dekat. Dia memiliki serangan balasan yang kuat dan dapat mengunci musuh dalam jarak dekat.", 
    "Ultimate skill Balmond, Lethal Counter, memungkinkan Balmond untuk menghadapi serangan musuh dengan serangan balasan yang lebih kuat.", 
    "Balmond: 'Kekuatan sejati ada dalam kegigihan!'",
    "Fighter Emblem",
    "Kemampuan spesial: Bloodthirst"
);


const saber = new Hero(
    "Saber", 
    "Assassin", 
    "Melee", 
    {
        HP: 2478,
        attack: 124,
        defense: 87,
        speed: 260,
        attackSpeed: 9,
        magicPower: 0,
        physicalPenetration: 10,
        lifesteal: 0,
        manaRegen: 22,
        cooldownReduction: 10,
        critChance: 0,
        moveSpeed: 260,
    }, 
    [
        {
            nama: "Skill 1: Flying Sword",
            efek: "Melemparkan pedang terbang ke arah musuh, menghasilkan kerusakan fisik dan memantul ke musuh berikutnya.",
            damage: "Kerugian Fisik +150",
        },
        {
            nama: "Skill 2: Charge",
            efek: "Meluncur ke depan dan menyerang musuh, menghasilkan kerusakan fisik pada musuh yang terkena.",
            damage: "Kerugian Fisik +220",
        },
        {
            nama: "Ultimate: Triple Sweep",
            efek: "Melompat ke arah musuh, menyerang tiga kali berturut-turut dengan pedang, menghasilkan kerusakan fisik.",
            damage: "Kerugian Fisik +400 (Total 3 serangan)",
        }
    ], 
    [
        {
            nama: "Swift Boots",
            detail: "Attack Speed +15%, Move Speed +40.",
        },
        {
            nama: "Endless Battle",
            detail: "Attack +65, Lifesteal +15%, Physical Penetration +20, Unique Passive: Divine Justice - Deals extra true damage equal to 85% of physical attack to the next basic attack after using a skill.",
        },
        {
            nama: "Blade of Despair",
            detail: "Attack +170, Attack Speed +5%, Unique Passive: Despair - Deals extra damage to enemies with HP below 50%.",
        },
        {
            nama: "Berserker's Fury",
            detail: "Attack +65, Critical Rate +25%, Unique Passive: Doom - Increases critical damage by 50%.",
        },
        {
            nama: "Blade of the 7 Seas",
            detail: "Attack +65, Attack Speed +25%, Unique Passive: Steam Roll - Reduces skill cooldown after a basic attack.",
        }
    ], 
    "Saber adalah seorang Assassin yang mahir dalam mengontrol pedang terbangnya.", 
    "Ultimate skill Saber, Triple Sweep, memungkinkan Saber untuk melompat dan menyerang tiga kali berturut-turut.", 
    "Saber: 'Kecepatan dan ketepatan!'", 
    "Assassin Emblem", 
    "Kemampuan spesial: Takedown"
);


const alice = new Hero(
    "Alice", 
    "Mage", 
    "Melee", 
    {
        HP: 2400,
        attack: 100,
        defense: 85,
        speed: 250,
        attackSpeed: 15,
        magicPower: 120,
        physicalPenetration: 0,
        lifesteal: 12,
        manaRegen: 10,
        cooldownReduction: 0,
        critChance: 0,
        moveSpeed: 260,
    }, 
    [
        {
            nama: "Skill 1: Flowing Blood",
            efek: "Menyerang musuh dengan darah ajaib. Memberikan lifesteal dan memulihkan HP Alice.",
            damage: "Kerugian Magis +300, Lifesteal +50%, Memulihkan HP +100",
        },
        {
            nama: "Skill 2: Blood Awe",
            efek: "Melepaskan energi ajaib untuk mengunci musuh dalam area tertentu. Menghasilkan lifesteal yang signifikan.",
            damage: "Kerugian Magis +200, Lifesteal +80%",
        },
        {
            nama: "Ultimate: Blood Ode",
            efek: "Mengalirkan darah ajaib ke arah yang ditentukan, memberikan kerusakan berulang pada musuh dalam perjalanannya.",
            damage: "Kerugian Magis per Detik +80 selama 4 detik",
        }
    ], 
    [
        {
            nama: "Arcane Boots",
            detail: "Magic Penetration +15, Cooldown Reduction +10%.",
        },
        {
            nama: "Concentrated Energy",
            detail: "Magic Life Steal +25%, HP +500, Unique Passive: Recharge - Regenerates 10% of one's HP after killing a hero.",
        },
        {
            nama: "Holy Crystal",
            detail: "Magic Power +90, Unique Passive: Exterminate - Increases magic attack by 25% after a skill hits a target.",
        },
        {
            nama: "Glowing Wand",
            detail: "Magic Power +75, Magic Penetration +5%, Unique Passive: Scorch - Burns the target for 3 seconds when the skills hit, dealing extra magic damage.",
        },
        {
            nama: "Divine Glaive",
            detail: "Magic Penetration +65, Unique Passive: Spellbreaker - When HP is higher than 70%, the unique attribute for this equipment will increase the magic penetration effect.",
        }
    ], 
    "Alice adalah seorang Mage yang mengendalikan darah ajaib. Dia dapat menghasilkan kerusakan dan memulihkan dirinya sendiri melalui darah.",
    "Ultimate skill Alice, Blood Ode, mengalirkan darah ajaib untuk memberikan kerusakan berulang pada musuh.",
    "Alice: 'Darah adalah sumber kehidupan.'",
    "Mage Emblem",
    "Kemampuan spesial: Flowing Blood"
);


const nana = new Hero(
    "Nana", 
    "Mage", 
    "Ranged", 
    {
        HP: 1880,
        attack: 115,
        defense: 15,
        speed: 255,
        attackSpeed: 15,
        magicPower: 0,
        physicalPenetration: 0,
        lifesteal: 0,
        manaRegen: 21,
        cooldownReduction: 0,
        critChance: 0,
        moveSpeed: 250,
    }, 
    [
        {
            nama: "Skill 1: Molina Smooch",
            efek: "Melemparkan Molina yang mencium musuh, memberikan kerusakan dan mengurangi kecepatan gerakan musuh.",
            damage: "Kerugian Sihir +200, Pengurangan Kecepatan Gerakan Musuh -60% selama 1,5 detik",
        },
        {
            nama: "Skill 2: Magic Boomerang",
            efek: "Melemparkan boomerang yang memberikan kerusakan pada musuh dan dapat kembali ke Nana.",
            damage: "Kerugian Sihir +160, Kerugian Tambahan +60",
        },
        {
            nama: "Ultimate: Molina Blitz",
            efek: "Mengeluarkan Molina yang menyerang musuh secara beruntun. Molina dapat mengejar musuh.",
            damage: "Kerugian Sihir +300 per serangan Molina",
        }
    ], 
    [
        {
            nama: "Arcane Boots",
            detail: "Mana +250, Magic PEN +40",
        },
        {
            nama: "Clock of Destiny",
            detail: "HP +700, Magic Power +60, Mana +600, Unique Passive: Time - Adds 30 HP and 5 Magic Attack every 30s. Up to 10 times.",
        },
        {
            nama: "Lightning Truncheon",
            detail: "Magic Power +75, Unique Passive: Resonate - Deals bonus Magic Damage to the nearest three enemies every 6s.",
        },
        {
            nama: "Holy Crystal",
            detail: "Magic Power +90, Unique Passive: Exterminate - Increases Magic Attack by 15% after a skill hits a target.",
        },
        {
            nama: "Ice Queen Wand",
            detail: "Magic Power +75, Mana +300, Unique Passive: Spellbreaker - Reduces the target's movement speed for 3s after hitting them with a skill.",
        }
    ], 
    "Nana adalah seorang Mage yang memiliki kemampuan mengendalikan sihir dengan bantuan Molina, kucing ajaibnya.", 
    "Ultimate skill Nana, Molina Blitz, memungkinkan Nana mengeluarkan Molina untuk mengejar dan menyerang musuh.", 
    "Nana: 'Molina, seranglah mereka!'", 
    "Mage Emblem", 
    "Kemampuan spesial: Magic Boomerang"
);


const tigreal = new Hero(
    "Tigreal", 
    "Tank", 
    "Melee", 
    {
        HP: 2600,
        attack: 115,
        defense: 100,
        speed: 260,
        attackSpeed: 10,
        magicPower: 0,
        physicalPenetration: 0,
        lifesteal: 0,
        manaRegen: 15,
        cooldownReduction: 0,
        critChance: 0,
        moveSpeed: 260,
    }, 
    [
        {
            nama: "Skill 1: Fearless",
            efek: "Menghentikan musuh dengan pukulan pedang dan menghancurkan pertahanan musuh.",
            damage: "Kerugian Fisik +200, Memperlambat Musuh, Merusak Pertahanan Musuh",
        },
        {
            nama: "Skill 2: Sacred Hammer",
            efek: "Melompat ke lokasi target dan mendarat dengan keras untuk memberikan kerusakan pada area sekitar.",
            damage: "Kerugian Fisik +180, Area Efek",
        },
        {
            nama: "Ultimate: Wombo Combo",
            efek: "Meluncurkan diri ke arah target dan menghentikan semua musuh di jalannya.",
            damage: "Kerugian Fisik +350, Menghentikan Musuh",
        }
    ], 
    [
        {
            nama: "Cursed Helmet",
            detail: "HP +920, Magic Defense +50, Unique Passive: Burning Soul - Deals magic damage to nearby enemies.",
        },
        {
            nama: "Warrior Boots",
            detail: "Move Speed +40, Unique Passive: Valor - Physical defense increases by 5 with each basic attack received, up to 25.",
        },
        {
            nama: "Athena's Shield",
            detail: "HP +900, Magic Defense +56, Unique Passive: Shield - Gains a shield that can absorb damage when HP is below 70%.",
        },
        {
            nama: "Immortality",
            detail: "HP +800, Unique Passive: Immortal - Resurrects 2 seconds after dying and gains 15% HP and a shield that can absorb damage.",
        },
        {
            nama: "Blade Armor",
            detail: "HP +90, Armor +30, Unique Passive: Counterstrike - Returns 25% of the damage taken by the enemy as physical damage.",
        }
    ], 
    "Tigreal adalah seorang Tank yang kuat dan berani dalam melindungi timnya.", 
    "Ultimate skill Tigreal, Wombo Combo, memungkinkan Tigreal menghentikan semua musuh di jalannya dengan pukulan kuat.", 
    "Tigreal: 'Aku adalah pelindung yang tak terkalahkan!'", 
    "Tank Emblem", 
    "Kemampuan spesial: Fearless"
);


const alucard = new Hero(
    "Alucard", 
    "Fighter", 
    "Melee", 
    {
        HP: 2400,
        attack: 120,
        defense: 90,
        speed: 260,
        attackSpeed: 25,
        magicPower: 0,
        physicalPenetration: 0,
        lifesteal: 15,
        manaRegen: 10,
        cooldownReduction: 0,
        critChance: 20,
        moveSpeed: 265,
    }, 
    [
        {
            nama: "Skill 1: Groundsplitter",
            efek: "Melompat ke target dan memberikan serangan mematikan. Meningkatkan lifesteal untuk serangan berikutnya.",
            damage: "Kerugian Fisik +300, Lifesteal +20% (untuk serangan berikutnya)",
        },
        {
            nama: "Skill 2: Whirling Smash",
            efek: "Melakukan serangan berputar yang mengenai musuh di sekitarnya. Meningkatkan serangan berikutnya.",
            damage: "Kerugian Fisik +250, Bonus Attack +30",
        },
        {
            nama: "Ultimate: Fission Wave",
            efek: "Menghasilkan gelombang energi yang mengenai musuh dalam garis lurus. Memiliki efek pendarahan setelah serangan.",
            damage: "Kerugian Fisik +500, Pendarahan: Kerugian per Detik +200 selama 3 detik",
        }
    ], 
    [
        {
            nama: "Bloodlust Axe",
            detail: "Attack +70, Spell Vamp +20%, Unique Passive: Bloodthirsty - Reduces spell cooldown and increases lifesteal after each skill cast.",
        },
        {
            nama: "Warrior Boots",
            detail: "Physical Defense +22, Unique Passive: Valor - Reduces damage taken from Melee Basic Attacks.",
        },
        {
            nama: "Endless Battle",
            detail: "Attack +65, Lifesteal +15%, Physical Penetration +20, Unique Passive: Divine Justice - Deals extra true damage equal to 85% of physical attack to the next basic attack after using a skill.",
        },
        {
            nama: "Blade of the 7 Seas",
            detail: "Attack +65, Attack Speed +25%, Physical Penetration +15, Unique Passive: Steamroll - Increases physical attack and attack speed after kills or assists.",
        },
        {
            nama: "Rose Gold Meteor",
            detail: "Attack +60, Magic Resistance +30, Unique Passive: Lifeline - Provides a shield when HP is low.",
        }
    ], 
    "Alucard adalah seorang Fighter yang kuat dengan kemampuan lifesteal yang tinggi.", 
    "Ultimate skill Alucard, Fission Wave, menghasilkan gelombang energi mematikan.", 
    "Alucard: 'Darah adalah kekuatan sejati.'", 
    "Fighter Emblem", 
    "Kemampuan spesial: Pursuit"
);


const karina = new Hero(
    "Karina", 
    "Assassin", 
    "Melee", 
    {
        HP: 2098,
        attack: 121,
        defense: 82,
        speed: 250,
        attackSpeed: 0,
        magicPower: 0,
        physicalPenetration: 0,
        lifesteal: 0,
        manaRegen: 45,
        cooldownReduction: 0,
        critChance: 0,
        moveSpeed: 260,
    }, 
    [
        {
            nama: "Skill 1: Elusiveness",
            efek: "Menghindari serangan musuh dan mendapatkan peningkatan serangan selama beberapa detik.",
            damage: "Tidak ada damage, tetapi memberikan peningkatan serangan."
        },
        {
            nama: "Skill 2: Dance of Death",
            efek: "Menyerang musuh dengan cepat dan memberikan efek luka bakar.",
            damage: "Kerugian Fisik +180, Efek Luka Bakar selama 4 detik."
        },
        {
            nama: "Ultimate: Shadow Rush",
            efek: "Menyerang musuh dan memberikan kerusakan besar. Dapat digunakan kembali jika membunuh musuh.",
            damage: "Kerugian Fisik +260, Cooldown direset jika membunuh."
        }
    ], 
    [
        {
            nama: "Swift Boots",
            detail: "Attack Speed +15%, Move Speed +40.",
        },
        {
            nama: "Endless Battle",
            detail: "Attack +65, Lifesteal +15%, Physical Penetration +20, Unique Passive: Divine Justice - Deals extra true damage equal to 85% of physical attack to the next basic attack after using a skill."
        },
        {
            nama: "Blade of Despair",
            detail: "Attack +170, Unique Passive: Despair - Deals extra damage to enemies with HP below 50%."
        },
        {
            nama: "Berserker's Fury",
            detail: "Attack +65, Critical Rate +25%, Unique Passive: Doom - Increases critical damage by 50%."
        },
        {
            nama: "Queen's Wings",
            detail: "HP +1000, Attack +25, Unique Passive: Demonize - Reduces HP by 50% and increases Lifesteal by 30% for 5 seconds after taking damage."
        }
    ], 
    "Karina adalah seorang Assassin yang sangat berbahaya dalam pertempuran jarak dekat.", 
    "Ultimate skill Karina, Shadow Rush, memungkinkan Karina untuk menghindari cooldown jika dia membunuh musuh dengan skill tersebut.", 
    "Karina: 'Kegelapan adalah temanku.'", 
    "Assassin Emblem", 
    "Kemampuan spesial: Elusiveness"
);


const akai = new Hero(
    "Akai", 
    "Tank", 
    "Melee", 
    {
        HP: 2700,
        attack: 115,
        defense: 120,
        speed: 260,
        attackSpeed: 20,
        magicPower: 0,
        physicalPenetration: 0,
        lifesteal: 0,
        manaRegen: 12,
        cooldownReduction: 0,
        critChance: 0,
        moveSpeed: 250,
    }, 
    [
        {
            nama: "Skill 1: Thousand Pounder",
            efek: "Akai melakukan serangan loncatan, mengenai area target dengan pukulan yang besar. Musuh yang terkena akan mengalami perlambatan gerakan.",
            damage: "Kerugian Fisik +200, Perlambatan Gerakan -60% selama 1.5 detik",
        },
        {
            nama: "Skill 2: Blender",
            efek: "Akai menghembuskan angin kencang, menimbulkan kerusakan area pada musuh. Selain itu, Akai mendapatkan perisai sementara.",
            damage: "Kerugian Fisik +180, Perisai +300",
        },
        {
            nama: "Ultimate: Hurricane Dance",
            efek: "Akai melompat ke udara dan menari-nari sambil memukul musuh yang berada di dekatnya, memberikan kerusakan dan mengacaukan musuh.",
            damage: "Kerugian Fisik +350, Mengacaukan Musuh",
        }
    ], 
    [
        {
            nama: "Courage Mask",
            detail: "HP +700, Defense +30, Unique Active: Deter - Memberikan perisai kepada diri sendiri dan teman sekitar.",
        },
        {
            nama: "Warrior Boots",
            detail: "Move Speed +40, Physical Defense +22.",
        },
        {
            nama: "Blade Armor",
            detail: "HP +90, Defense +60, Unique Passive: Counterstrike - Mengembalikan 25% kerusakan fisik yang diterima oleh musuh saat menyerang.",
        },
        {
            nama: "Athena's Shield",
            detail: "HP +900, Defense +56, Magical Defense +40, Unique Passive: Shield - Membuat perisai sementara saat HP turun di bawah 70%.",
        },
        {
            nama: "Dominance Ice",
            detail: "HP +500, Defense +70, Unique Passive: Arctic Cold - Mengurangi attack speed musuh di sekitar sebesar 30%.",
        }
    ], 
    "Akai adalah seorang Tank yang memiliki kekuatan besar. Dengan skill-skillnya, ia dapat mengendalikan area pertempuran dengan efektif.", 
    "Ultimate skill Akai, Hurricane Dance, memungkinkan Akai untuk mengacaukan musuh-musuh di sekitarnya.", 
    "Akai: 'Ayo, bermain dengan angin!'",
    "Tank Emblem",
    "Kemampuan spesial: Thousand Pounder"
);


const franco = new Hero(
    "Franco",
    "Tank",
    "Melee",
    {
        HP: 2900,
        attack: 110,
        defense: 25,
        speed: 260,
        attackSpeed: 15,
        magicPower: 0,
        physicalPenetration: 0,
        lifesteal: 0,
        manaRegen: 5,
        cooldownReduction: 0,
        critChance: 0,
        moveSpeed: 260,
    },
    [
        {
            nama: "Skill 1: Iron Hook",
            efek: "Melemparkan cangkul besi untuk menarik musuh ke arah Franco.",
            damage: "Kerugian Fisik +250",
        },
        {
            nama: "Skill 2: Fury Shock",
            efek: "Menghentikan gerakan musuh dan memberikan kerusakan fisik.",
            damage: "Kerugian Fisik +220",
        },
        {
            nama: "Ultimate: Wasteland Force",
            efek: "Melemparkan granat untuk meledakkan musuh dan memberikan efek stun.",
            damage: "Kerugian Fisik +450, Stun selama 1.5 detik",
        }
    ],
    [
        {
            nama: "Courage Mask",
            detail: "HP +700, Mana Regen +10, Unique Passive: Bravery - Reduces damage taken by nearby allies by 10%.",
        },
        {
            nama: "Warrior Boots",
            detail: "Move Speed +40, Unique Passive: Valor - Physical Defense +20.",
        },
        {
            nama: "Oracle",
            detail: "HP +850, Cooldown Reduction +10%, Unique Passive: Bless - Regens 10% of total HP over 2s after taking damage.",
        },
        {
            nama: "Athena's Shield",
            detail: "HP +900, Magical Defense +56, Unique Passive: Shield - Gains a shield that can absorb 450-1150 damage (increases with level) every 30s.",
        },
        {
            nama: "Immortality",
            detail: "HP +800, Resurrects 2s after dying and gains 15% HP and a shield that can absorb 300-1000 damage (increases with level).",
        }
    ],
    "Franco adalah seorang Tank kuat yang bisa menarik musuh dan menghentikan pergerakan mereka dengan cangkul besi dan granat.",
    "Ultimate skill Franco, Wasteland Force, dapat menghasilkan efek stun yang sangat berguna dalam pertempuran tim.",
    "Franco: 'Kemarilah, teman-teman! Aku akan menarik musuh ke dalam perangkap!'",
    "Tank Emblem",
    "Kemampuan spesial: Toughness"
);


const bane = new Hero(
    "Bane", 
    "Fighter", 
    "Melee", 
    {
        HP: 2400,
        attack: 123,
        defense: 90,
        speed: 265,
        attackSpeed: 9,
        magicPower: 0,
        physicalPenetration: 10,
        lifesteal: 8,
        manaRegen: 10,
        cooldownReduction: 0,
        critChance: 10,
        moveSpeed: 250,
    }, 
    [
        {
            nama: "Skill 1: Crab Claw Cannon",
            efek: "Melepaskan tembakan dari meriam kepiting yang menghasilkan kerusakan fisik pada area target.",
            damage: "Kerugian Fisik +240",
        },
        {
            nama: "Skill 2: Rum, Bottle, and Cigar",
            efek: "Meminum ramuan yang meningkatkan serangan fisik dan memberikan efek lifesteal.",
            damage: "Kerugian Fisik +100, Lifesteal +60%",
        },
        {
            nama: "Ultimate: Dead Man's Poseidon",
            efek: "Mengutuk musuh di dekatnya dan menghasilkan kerusakan fisik seiring waktu.",
            damage: "Kerugian Fisik +350, Kerusakan per Detik +120 selama 6 detik",
        }
    ], 
    [
        {
            nama: "Warrior Boots",
            detail: "HP +22%, Physical Defense +40, Unique Passive: Valor - Physical defense will go up 3 with each basic attack received, for an increase of up to 15 points.",
        },
        {
            nama: "Endless Battle",
            detail: "Attack +65, Lifesteal +15%, Physical Penetration +20, Unique Passive: Divine Justice - Deals extra true damage equal to 85% of physical attack to the next basic attack after using a skill.",
        },
        {
            nama: "Blade of Despair",
            detail: "Attack +170, Unique Passive: Despair - Deals an extra 10% damage to an enemy in any abnormal state (stunned, knocked airborne, transformed, disabled).",
        },
        {
            nama: "Athena's Shield",
            detail: "HP +900, Magical Defense +56, Unique Passive: Shield - Gains a damage-absorbing shield every 30s. Shield absorption amount grows as the match goes on, maxing out at 1150.",
        },
        {
            nama: "Brute Force Breastplate",
            detail: "HP +770, Physical Defense +55, Unique Passive: Brute Force - Increases physical and magic defense by 4% for 4s after taking damage, stacking up to 5 times.",
        }
    ], 
    "Bane adalah seorang Fighter yang kuat dengan kemampuan serangan dan regenerasi yang hebat.", 
    "Ultimate skill Bane, Dead Man's Poseidon, mengutuk musuh dan menyebabkan kerusakan seiring waktu.", 
    "Bane: 'Kepitingku lapar!'", 
    "Fighter Emblem", 
    "Kemampuan spesial: Bloodlust"
);


const bruno = new Hero(
    "Bruno",
    "Marksman",
    "Ranged",
    {
        HP: 2400,
        attack: 120,
        defense: 80,
        speed: 260,
        attackSpeed: 26,
        magicPower: 0,
        physicalPenetration: 0,
        lifesteal: 15,
        manaRegen: 18,
        cooldownReduction: 0,
        critChance: 15,
        moveSpeed: 255,
    },
    [
        {
            nama: "Skill 1: Volley Shot",
            efek: "Menembakkan bola ke arah musuh. Bola dapat memantul ke musuh lain setelah mengenai target.",
            damage: "Kerugian Fisik +280",
        },
        {
            nama: "Skill 2: Flying Tackle",
            efek: "Melakukan serangan jarak dekat ke musuh dengan pukulan kuat.",
            damage: "Kerugian Fisik +180",
        },
        {
            nama: "Ultimate: Wave of the World",
            efek: "Melepaskan gelombang energi besar yang merusak musuh dan memberikan efek knock-up.",
            damage: "Kerugian Fisik +420, Efek Knock-up",
        }
    ],
    [
        {
            nama: "Demon Hunter Sword",
            detail: "Attack +35, Lifesteal +12%, Unique Passive: Devour - Lowers target's physical defense by 25 for 2 seconds.",
        },
        {
            nama: "Swift Boots",
            detail: "Attack Speed +15%, Move Speed +40.",
        },
        {
            nama: "Berserker's Fury",
            detail: "Attack +65, Critical Rate +25%, Unique Passive: Doom - Increases critical damage by 50%.",
        },
        {
            nama: "Wind of Nature",
            detail: "Attack Speed +10%, Physical Defense +20, Unique Passive: Wind Chant - Removes debuffs and makes the hero immune to all physical damage for 2 seconds.",
        },
        {
            nama: "Endless Battle",
            detail: "Attack +65, Lifesteal +15%, Physical Penetration +20, Unique Passive: Divine Justice - Deals extra true damage equal to 85% of physical attack to the next basic attack after using a skill.",
        }
    ],
    "Bruno adalah seorang Marksman yang mahir dalam menembakkan bola dan memiliki serangan jarak jauh yang kuat.",
    "Ultimate skill Bruno, Wave of the World, menghasilkan gelombang energi besar yang merusak musuh dan memberikan efek knock-up.",
    "Bruno: 'Ayo main sepak bola!'",
    "Marksman Emblem",
    "Kemampuan spesial: Volley Shot"
);


const clint = new Hero(
    "Clint", 
    "Marksman", 
    "Ranged", 
    {
        HP: 2400,
        attack: 120,
        defense: 70,
        speed: 260,
        attackSpeed: 24,
        magicPower: 0,
        physicalPenetration: 0,
        lifesteal: 10,
        manaRegen: 15,
        cooldownReduction: 0,
        critChance: 15,
        moveSpeed: 255,
    }, 
    [
        {
            nama: "Skill 1: Blind Smoke",
            efek: "Melempar asap yang membutakan pandangan musuh dan menyebabkan kerusakan.",
            damage: "Kerugian Fisik +200, Efek Buta 2 Detik",
        },
        {
            nama: "Skill 2: Fire Wheel",
            efek: "Melempar roda api yang menggelinding ke musuh dan meledak saat mengenai target.",
            damage: "Kerugian Fisik +180, Area Efek Ledakan",
        },
        {
            nama: "Ultimate: Quick Draw",
            efek: "Menembakkan senjata dengan cepat dan menyebabkan kerusakan besar pada musuh yang terkena.",
            damage: "Kerugian Fisik +350, Jarak Jauh",
        }
    ], 
    [
        {
            nama: "Demon Hunter Sword",
            detail: "Attack +35, Lifesteal +12%, Unique Passive: Devour - Lowers target's physical defense by 25 for 2 seconds.",
        },
        {
            nama: "Swift Boots",
            detail: "Attack Speed +15%, Move Speed +40.",
        },
        {
            nama: "Windtalker",
            detail: "Attack Speed +20%, Move Speed +20, Unique Passive: Typhoon - Every 4th basic attack triggers a lightning attack that hits up to 3 enemies.",
        },
        {
            nama: "Scarlet Phantom",
            detail: "Attack Speed +30%, Critical Rate +20%, Unique Passive: Frenzy - Increases attack speed after a critical hit.",
        },
        {
            nama: "Endless Battle",
            detail: "Attack +65, Lifesteal +15%, Physical Penetration +20, Unique Passive: Divine Justice - Deals extra true damage equal to 85% of physical attack to the next basic attack after using a skill.",
        }
    ], 
    "Clint adalah seorang Marksman yang mematikan dengan kemampuan tembakannya yang akurat.", 
    "Ultimate skill Clint, Quick Draw, memungkinkan Clint mengeksekusi musuh dengan cepat dan efisien.", 
    "Clint: 'Aku tidak pernah melesetkan tembakanku.'", 
    "Marksman Emblem", 
    "Kemampuan spesial: Ammo"
);


const rafaela = new Hero(
    "Rafaela", 
    "Support", 
    "Ranged", 
    {
        HP: 1850,
        attack: 115,
        defense: 110,
        speed: 250,
        attackSpeed: 15,
        magicPower: 0,
        physicalPenetration: 0,
        lifesteal: 0,
        manaRegen: 20,
        cooldownReduction: 0,
        critChance: 0,
        moveSpeed: 240,
    }, 
    [
        {
            nama: "Skill 1: Light of Retribution",
            efek: "Melepaskan cahaya suci yang menyerang musuh dan memberikan efek kecepatan gerakan tambahan kepada rekan setim yang terkena serangannya.",
            damage: "Kerugian Fisik +200, Efek Kecepatan Gerakan +30%",
        },
        {
            nama: "Skill 2: Holy Healing",
            efek: "Mengobati dirinya sendiri atau rekan setim dengan cahaya suci. Mengurangi waktu penyembuhan untuk dirinya sendiri ketika menggunakannya pada dirinya sendiri.",
            damage: "Pemulihan HP +350, Pemulihan HP Tambahan +100 untuk dirinya sendiri",
        },
        {
            nama: "Ultimate: Holy Baptism",
            efek: "Melepaskan cahaya suci yang memberikan area efek kecepatan gerakan kepada rekan setim dan menghancurkan perisai musuh.",
            damage: "Efek Kecepatan Gerakan +40%, Perisai Musuh -20%",
        }
    ], 
    [
        {
            nama: "Courage Mask",
            detail: "Mana Regen +30%, HP Regen +30%, Active Skill - Encourage: Increases movement speed of nearby allied heroes by 30% for 5 seconds.",
        },
        {
            nama: "Arcane Boots",
            detail: "Magic Penetration +15, Mana Regen +40.",
        },
        {
            nama: "Oracle",
            detail: "HP Regen +850, Magical Defense +36, Unique Passive - Scream: Within 4s after being attacked, the hero will regen 10% HP. This effect has a 6s cooldown time.",
        },
        {
            nama: "Athena's Shield",
            detail: "HP +900, Magical Defense +56, Unique Passive - Shield: Gains a shield that can absorb 170-1150 damage. The shield lasts for 30s with a 40s cooldown.",
        },
        {
            nama: "Windtalker",
            detail: "Attack Speed +40%, Movement Speed +20%, Unique Passive - Typhoon: Every 5s, the next basic attack hits 3 enemies. The damage dealt to the main target will decresae 50% after the typhoon hits the target. This effect has a cooldown of 1.5s.",
        }
    ], 
    "Rafaela adalah seorang Support yang mahir dalam menyembuhkan rekan setimnya dengan cahaya suci.", 
    "Ultimate skill Rafaela, Holy Baptism, memungkinkan Rafaela memberikan efek kecepatan gerakan kepada rekan setim dan menghancurkan perisai musuh.", 
    "Rafaela: 'Cahaya suci akan memberikan kita perlindungan.'", 
    "Support Emblem", 
    "Kemampuan spesial: Prayer"
);


const eudora = new Hero(
    "Eudora", 
    "Mage", 
    "Ranged", 
    {
        HP: 2093,
        attack: 105,
        defense: 20,
        speed: 240,
        attackSpeed: 0,
        magicPower: 10,
        physicalPenetration: 0,
        lifesteal: 0,
        manaRegen: 10,
        cooldownReduction: 0,
        critChance: 0,
        moveSpeed: 250,
    }, 
    [
        {
            nama: "Skill 1: Forked Lightning",
            efek: "Melepaskan kilat ganda untuk menyerang musuh. Menimbulkan efek stun.",
            damage: "Kerugian Magis +300, Durasi Stun 1.25 detik",
        },
        {
            nama: "Skill 2: Electric Arrow",
            efek: "Melepaskan anak panah listrik untuk menyerang musuh dalam garis lurus.",
            damage: "Kerugian Magis +200",
        },
        {
            nama: "Ultimate: Thunderstruck",
            efek: "Melepaskan petir yang sangat merusak pada musuh dalam area target.",
            damage: "Kerugian Magis +520",
        }
    ], 
    [
        {
            nama: "Enchanted Talisman",
            detail: "Magic Power +50, Mana Regen +20, Cooldown Reduction +20%.",
        },
        {
            nama: "Arcane Boots",
            detail: "Magic Penetration +40, Move Speed +40.",
        },
        {
            nama: "Glowing Wand",
            detail: "Magic Power +75, Magic Penetration +5%, Unique Passive: Scorch - Burns the target for 3 seconds.",
        },
        {
            nama: "Necklace of Durance",
            detail: "Magic Power +65, HP Regen +25, Unique Passive: Life Drain - Reduces the HP regen effect of enemies by 50%.",
        },
        {
            nama: "Holy Crystal",
            detail: "Magic Power +90, Unique Passive: Exterminate - Increases magic attack by 15% after a skill hits a target.",
        }
    ], 
    "Eudora adalah seorang Mage yang mahir dalam menggunakan sihir petir untuk mengalahkan musuhnya.", 
    "Ultimate skill Eudora, Thunderstruck, memungkinkan Eudora melepaskan petir merusak yang dapat menghancurkan musuh dalam area tertentu.", 
    "Eudora: 'Sihir petirku akan mengguncang dunia!'", 
    "Mage Emblem", 
    "Kemampuan spesial: Superconductor"
);

const zilong = new Hero(
    "Zilong", 
    "Fighter", 
    "Melee", 
    {
        HP: 2511,
        attack: 114,
        defense: 83,
        speed: 265,
        attackSpeed: 9,
        magicPower: 0,
        physicalPenetration: 0,
        lifesteal: 0,
        manaRegen: 0,
        cooldownReduction: 0,
        critChance: 0,
        moveSpeed: 260,
    }, 
    [
        {
            nama: "Skill 1: Spear Flip",
            efek: "Melempar tombak untuk menarik diri ke musuh. Menghasilkan efek knock-up pada musuh.",
            damage: "Kerugian Fisik +260",
        },
        {
            nama: "Skill 2: Wind Blade",
            efek: "Meningkatkan serangan dasar dan kecepatan serangan sementara.",
            damage: "Kerugian Fisik +150, Attack Speed +30%",
        },
        {
            nama: "Ultimate: Spear of Glory",
            efek: "Meluncur ke lokasi yang ditentukan, menimbulkan efek knock-up pada musuh yang dihantam.",
            damage: "Kerugian Fisik +500",
        }
    ], 
    [
        {
            nama: "Endless Battle",
            detail: "Physical Attack +65, Lifesteal +15%, Physical Penetration +20, Unique Passive: Divine Justice - Deals extra true damage equal to 85% of physical attack to the next basic attack after using a skill.",
        },
        {
            nama: "Swift Boots",
            detail: "Attack Speed +15%, Move Speed +40.",
        },
        {
            nama: "Blade of Despair",
            detail: "Physical Attack +170, Unique Passive: Despair - Deals extra damage to enemies with HP below 50%.",
        },
        {
            nama: "Rose Gold Meteor",
            detail: "Physical Attack +60, Magic Resistance +30, Unique Passive: Lifeline - Generates a shield when HP is below 30%.",
        },
        {
            nama: "Berserker's Fury",
            detail: "Physical Attack +65, Critical Rate +25%, Unique Passive: Doom - Increases critical damage by 50%.",
        }
    ], 
    "Zilong adalah seorang Fighter yang mahir dalam menggunakan tombaknya untuk mengalahkan musuh-musuhnya.", 
    "Ultimate skill Zilong, Spear of Glory, memungkinkan Zilong untuk meluncur dengan cepat ke musuh yang ditentukan dan menimbulkan efek knock-up.", 
    "Zilong: 'Tombak kemuliaan saya tak terkalahkan!'", 
    "Fighter Emblem", 
    "Kemampuan spesial: Bravery"
);


const allHeroes = [miya, balmond, saber, alice, nana, tigreal, alucard, karina, akai, franco, bane, bruno, clint, rafaela, eudora, zilong];

for (const hero of allHeroes) {
    console.log(hero);
}
