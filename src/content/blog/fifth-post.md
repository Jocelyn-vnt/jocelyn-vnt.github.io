---
title: 'Coachella 2025 - Identité Visuelle & Campagne Motion Design'
description: 'Création complète de l\'identité visuelle pour Coachella 2025 : logo, affiches, animations motion design et campagne digitale pour le festival musical le plus iconique de Californie.'
pubDate: 'Jan 15 2025'
heroImage: '/CoverC.png'
---
<style>
        /* CSS personnalisé pour l'article Dragon Ball Z */
        /* À ajouter dans votre fichier BlogPost.astro */
        
        /* Détection et application du style pour l'article Dragon Ball Z */
        .dragon-ball-style {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%) !important;
            color: #f5f5f5 !important;
            position: relative;
        }
        
        /* Effet d'aura énergétique en arrière-plan */
        .dragon-ball-style::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 20%, rgba(255, 165, 0, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 60%, rgba(255, 215, 0, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(255, 140, 0, 0.06) 0%, transparent 50%);
            pointer-events: none;
            z-index: -1;
        }
        
        /* Container principal de l'article */
        .dragon-ball-style .prose {
            background: transparent !important;
            color: #f5f5f5 !important;
        }
        
        /* Titre principal avec effet doré */
        .dragon-ball-style h1 {
            background: linear-gradient(45deg, #ff8c00, #ffd700, #ff8c00) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
            text-shadow: 0 0 30px rgba(255, 215, 0, 0.5) !important;
            filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8)) !important;
            animation: dragonball-glow 3s ease-in-out infinite alternate !important;
        }
        
        /* Animation de lueur dorée */
        @keyframes dragonball-glow {
            from {
                text-shadow: 0 0 20px rgba(255, 215, 0, 0.5), 0 0 30px rgba(255, 165, 0, 0.3);
            }
            to {
                text-shadow: 0 0 30px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 165, 0, 0.5);
            }
        }
        
        /* Titres de section */
        .dragon-ball-style h2 {
            color: #ffd700 !important;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8) !important;
            border-bottom: 3px solid #ff8c00 !important;
            padding-bottom: 0.5rem !important;
            position: relative !important;
        }
        
        .dragon-ball-style h2::after {
            content: '';
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, #ff8c00, #ffd700, #ff8c00);
            box-shadow: 0 0 10px rgba(255, 140, 0, 0.6);
        }
        
        .dragon-ball-style h3 {
            color: #ffa500 !important;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7) !important;
            border-left: 4px solid #ff8c00 !important;
            padding-left: 1rem !important;
            margin-bottom: 1rem !important;
        }
        
        .dragon-ball-style h4 {
            color: #ffb347 !important;
            font-weight: 600 !important;
        }
        
        /* Texte principal */
        .dragon-ball-style p {
            color: #f5f5f5 !important;
            line-height: 1.7 !important;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5) !important;
        }
        
        /* Texte en gras avec effet doré */
        .dragon-ball-style strong {
            color: #ffd700 !important;
            font-weight: 700 !important;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8) !important;
        }
        
        /* Listes avec puces Dragon Ball */
        .dragon-ball-style ul li,
        .dragon-ball-style ol li {
            color: #f5f5f5 !important;
            position: relative !important;
        }
        
        .dragon-ball-style ul li::before {
            content: "🐉";
            margin-right: 0.5rem;
            color: #ff8c00;
            text-shadow: 0 0 5px rgba(255, 140, 0, 0.8);
        }
        
        /* Conteneurs principaux - style énergétique */
        .dragon-ball-style .bg-gradient-to-r,
        .dragon-ball-style .bg-white\/5,
        .dragon-ball-style .bg-white\/10 {
            background: linear-gradient(135deg, 
                rgba(255, 140, 0, 0.15), 
                rgba(255, 215, 0, 0.08),
                rgba(255, 165, 0, 0.1)
            ) !important;
            border: 2px solid rgba(255, 140, 0, 0.4) !important;
            box-shadow: 
                0 8px 32px rgba(255, 140, 0, 0.2),
                inset 0 1px 0 rgba(255, 215, 0, 0.3) !important;
            position: relative !important;
            overflow: hidden !important;
        }
        
        /* Effet d'énergie sur les conteneurs */
        .dragon-ball-style .bg-gradient-to-r::before,
        .dragon-ball-style .bg-white\/5::before,
        .dragon-ball-style .bg-white\/10::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
                transparent, 
                rgba(255, 215, 0, 0.1), 
                transparent
            );
            animation: energy-sweep 4s ease-in-out infinite;
        }
        
        @keyframes energy-sweep {
            0% { left: -100%; }
            100% { left: 100%; }
        }
        
        /* Bordures avec effet énergétique */
        .dragon-ball-style .border-white\/10,
        .dragon-ball-style .border-white\/20 {
            border-color: rgba(255, 140, 0, 0.4) !important;
            box-shadow: 0 0 10px rgba(255, 140, 0, 0.3) !important;
        }
        
        /* Ombres dorées */
        .dragon-ball-style .shadow-glass {
            box-shadow: 
                0 8px 32px rgba(255, 140, 0, 0.3),
                0 4px 16px rgba(255, 215, 0, 0.2) !important;
        }
        
        /* Liens avec style Saiyan */
        .dragon-ball-style a {
            color: #ffd700 !important;
            text-decoration: underline !important;
            text-decoration-color: #ff8c00 !important;
            transition: all 0.3s ease !important;
        }
        
        .dragon-ball-style a:hover {
            color: #ffff00 !important;
            text-shadow: 0 0 8px rgba(255, 255, 0, 0.8) !important;
            text-decoration-color: #ffd700 !important;
        }
        
        /* Code blocks avec style tech Capsule Corp */
        .dragon-ball-style code {
            background: rgba(27, 38, 59, 0.8) !important;
            color: #ffd700 !important;
            border: 1px solid #ff8c00 !important;
            box-shadow: 0 0 5px rgba(255, 140, 0, 0.3) !important;
        }
        
        /* Citations avec style mystique */
        .dragon-ball-style blockquote {
            border-left: 4px solid #ffd700 !important;
            background: linear-gradient(135deg, 
                rgba(255, 140, 0, 0.1), 
                rgba(255, 215, 0, 0.05)
            ) !important;
            color: #f5f5f5 !important;
            padding: 1.5rem !important;
            margin: 1.5rem 0 !important;
            border-radius: 0 12px 12px 0 !important;
            position: relative !important;
        }
        
        .dragon-ball-style blockquote::before {
            content: '"';
            font-size: 4rem;
            color: #ffd700;
            position: absolute;
            top: -10px;
            left: 10px;
            opacity: 0.3;
        }
        
        /* Boutons style Dragon Ball */
        .dragon-ball-style button,
        .dragon-ball-style .btn {
            background: linear-gradient(135deg, #ff8c00, #ffd700) !important;
            color: #1a1a1a !important;
            border: 2px solid #ff8c00 !important;
            padding: 0.75rem 1.5rem !important;
            border-radius: 25px !important;
            font-weight: 700 !important;
            text-transform: uppercase !important;
            letter-spacing: 1px !important;
            transition: all 0.3s ease !important;
            box-shadow: 0 4px 15px rgba(255, 140, 0, 0.4) !important;
        }
        
        .dragon-ball-style button:hover,
        .dragon-ball-style .btn:hover {
            background: linear-gradient(135deg, #ffd700, #ffff00) !important;
            transform: translateY(-3px) !important;
            box-shadow: 0 8px 25px rgba(255, 215, 0, 0.6) !important;
            text-shadow: 0 0 5px rgba(0, 0, 0, 0.8) !important;
        }
        
        /* Images avec effet énergétique */
        .dragon-ball-style img {
            border: 3px solid #ff8c00 !important;
            border-radius: 15px !important;
            box-shadow: 
                0 8px 25px rgba(255, 140, 0, 0.4),
                0 0 20px rgba(255, 215, 0, 0.3) !important;
            transition: all 0.3s ease !important;
        }
        
        .dragon-ball-style img:hover {
            transform: scale(1.03) !important;
            box-shadow: 
                0 12px 35px rgba(255, 140, 0, 0.6),
                0 0 30px rgba(255, 215, 0, 0.5) !important;
        }
        
        /* Tableaux style tech */
        .dragon-ball-style table {
            border: 2px solid #ff8c00 !important;
            background: rgba(26, 26, 26, 0.8) !important;
        }
        
        .dragon-ball-style th {
            background: linear-gradient(135deg, #ff8c00, #ffd700) !important;
            color: #1a1a1a !important;
            font-weight: 700 !important;
            text-transform: uppercase !important;
        }
        
        .dragon-ball-style td {
            color: #f5f5f5 !important;
            border-bottom: 1px solid rgba(255, 140, 0, 0.3) !important;
        }
        
        /* Palette de couleurs pour différents éléments */
        .dragon-ball-style .bg-gradient-to-br.from-blue-500\/20 {
            background: linear-gradient(135deg, rgba(255, 140, 0, 0.15), rgba(255, 165, 0, 0.1)) !important;
        }
        
        .dragon-ball-style .bg-gradient-to-br.from-purple-500\/20 {
            background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 140, 0, 0.1)) !important;
        }
        
        .dragon-ball-style .bg-gradient-to-br.from-green-500\/20 {
            background: linear-gradient(135deg, rgba(255, 165, 0, 0.15), rgba(255, 215, 0, 0.1)) !important;
        }
        
        .dragon-ball-style .bg-gradient-to-br.from-red-500\/20 {
            background: linear-gradient(135deg, rgba(255, 140, 0, 0.2), rgba(255, 69, 0, 0.1)) !important;
        }
        
        /* Textes colorés -> dorés */
        .dragon-ball-style .text-purple-300,
        .dragon-ball-style .text-blue-300,
        .dragon-ball-style .text-green-300,
        .dragon-ball-style .text-yellow-300 {
            color: #ffd700 !important;
        }
        
        /* Backdrop blur -> transparent energétique */
        .dragon-ball-style .backdrop-blur-sm {
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
            background: rgba(255, 140, 0, 0.05) !important;
        }
        
        /* Séparateur hr style énergie */
        .dragon-ball-style hr {
            border: none !important;
            height: 3px !important;
            background: linear-gradient(90deg, transparent, #ffd700, transparent) !important;
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.6) !important;
        }
        
        /* Overlay pour les images */
        .dragon-ball-style #imageOverlay {
            background: rgba(0, 0, 0, 0.95) !important;
        }
        
        .dragon-ball-style #imageOverlay button {
            background: linear-gradient(135deg, #ff8c00, #ffd700) !important;
            color: #1a1a1a !important;
            border: 2px solid #ff8c00 !important;
        }
        
        .dragon-ball-style #imageOverlay button:hover {
            background: linear-gradient(135deg, #ffd700, #ffff00) !important;
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.8) !important;
        }
        
        /* Animation d'entrée style transformation Saiyan */
        .dragon-ball-style .saiyan-transform {
            animation: saiyanTransform 1s ease-out forwards;
        }
        
        @keyframes saiyanTransform {
            0% {
                opacity: 0;
                transform: scale(0.8) translateY(50px);
                filter: blur(5px);
            }
            50% {
                opacity: 0.7;
                transform: scale(1.05) translateY(-10px);
                filter: blur(2px);
            }
            100% {
                opacity: 1;
                transform: scale(1) translateY(0);
                filter: blur(0);
            }
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .dragon-ball-style h1 {
                font-size: 2.5rem !important;
                line-height: 1.2 !important;
            }
            
            .dragon-ball-style h2 {
                font-size: 1.8rem !important;
            }
            
            .dragon-ball-style .prose {
                padding: 1rem !important;
            }
        }
        
        /* Effet de particules d'énergie (optionnel) */
        .dragon-ball-style .energy-particles {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
        }
        
        .dragon-ball-style .energy-particles::before,
        .dragon-ball-style .energy-particles::after {
            content: '';
            position: absolute;
            width: 3px;
            height: 3px;
            background: #ffd700;
            border-radius: 50%;
            box-shadow: 0 0 10px #ffd700;
            animation: energyFloat 8s infinite linear;
        }
        
        .dragon-ball-style .energy-particles::before {
            left: 20%;
            animation-delay: -2s;
        }
        
        .dragon-ball-style .energy-particles::after {
            left: 80%;
            animation-delay: -6s;
        }
        
        @keyframes energyFloat {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-10px) rotate(360deg);
                opacity: 0;
            }
        }
    </style>
</head>
<body>
    <div class="demo-container" style="padding: 2rem; background: #1a1a1a;">
        <h1>Aperçu du style Dragon Ball Z</h1>
        
        <!-- Simulation de l'article avec le nouveau style -->
<div class="dragon-ball-style">
            <div class="prose max-w-none">
               <h1>🐉 Dragon Ball Z - Univers 3D Immersif</h1>
                
<div class="bg-gradient-to-r p-8 mb-12 rounded-2xl border border-white/20">
                    <h2>🎯 Pourquoi Dragon Ball ?</h2>
                    <p><strong>Motivation personnelle :</strong> Le manga Dragon Ball m'a suivi durant toute ma jeunesse et c'est pour cette raison que je souhaite réaliser mon monde sur ce manga.</p>
                </div>
                
<div class="bg-white/5 p-8 mb-12 rounded-xl border border-white/10">
                    <h2>🏗️ Structure du Projet en Trois Étapes</h2>
                    
<div class="grid md:grid-cols-3 gap-6 mt-6">
                        <div class="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3>Première étape : Maison de Tortue Géniale</h3>
                            <p>Lieu où Goku et Krilin débutent leur entraînement avec Tortue Géniale.</p>
                        </div>
                        
<div class="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3>Deuxième étape : Planète Kaio</h3>
                            <p>Planète découverte après la mort de Goku, lors de son entraînement chez Kaio.</p>
                        </div>
                        
<div class="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3>Troisième étape : Tour de Karin</h3>
                            <p>Tour mystique que Goku escalade pour obtenir l'eau sacrée.</p>
                        </div>
                    </div>
                </div>
                
<blockquote>
                    "J'ai choisi de réaliser une scène sur l'univers de Dragon Ball car ce manga m'a suivi durant toute ma jeunesse."
                </blockquote>
                
<h3>🎨 Direction Artistique</h3>
                <ul>
                    <li><strong>#1B263B Mirage</strong> - Bleu sombre profond</li>
                    <li><strong>#0D0D0D Cod Gray</strong> - Noir intense</li>
                    <li><strong>#F5F5F5 Wild Sand</strong> - Blanc cassé</li>
                </ul>                
                <button class="btn">Découvrir le Projet</button>
            </div>
        </div>
    </div>
    
<script>
        // Script pour appliquer automatiquement le style Dragon Ball Z
        document.addEventListener('DOMContentLoaded', function() {
            // Vérifier si c'est l'article Dragon Ball Z
            const title = document.querySelector('h1');
            if (title && (title.textContent.includes('Dragon Ball') || title.textContent.includes('Dragon Ball Z'))) {
                // Appliquer la classe au container principal
                const article = document.querySelector('article') || document.querySelector('.prose').parentElement;
                if (article) {
                    article.classList.add(-'dragon-ball-style');
                }
                
                // Aussi l'appliquer au body
                document.body.classList.add('dragon-ball-style');
                
                // Ajouter des animations aux éléments
                const elements = document.querySelectorAll('h2, h3, .bg-gradient-to-r, .bg-white\\/5');
                elements.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('saiyan-transform');
                    }, index * 150);
                });
            }
        });
    </script>