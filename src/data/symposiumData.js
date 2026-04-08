



export const eventDetails = {
    general: {
        title: "REVOITZ 5.0",
        date: "March 5, 2026",
        host: "Department of Information Technology, Jeppiaar Engineering College",
        aboutEventOriginal: "ABOUT THE EVENT\n\nREVOITZ 4.0 is the annual technical symposium organized by the Department of Information Technology, Jeppiaar Engineering College. This premier event brings together brilliant minds, innovative thinkers, and technology enthusiasts from across colleges to showcase their technical prowess, creative skills, and problem-solving abilities.\n\nWith a perfect blend of technical and non-technical events, REVOITZ 4.0 offers a platform for students to compete, collaborate, and celebrate the spirit of innovation. From intense coding challenges to creative design competitions, from strategic gaming tournaments to investigative tech challenges - REVOITZ 4.0 has it all.\n\nThis year's theme draws inspiration from the globally acclaimed series, creating an immersive experience where participants navigate through challenges that test their technical depth, strategic thinking, and survival instincts in the digital realm.\n\nJoin us for an unforgettable journey through technology, creativity, and competition!",
        aboutEdward: "This is your life, and it's compiling one line at a time. We exist in the spaces between the 1s and 0s. REVOITZ 5.0 is not a symposium. It's an awakening. A test of the systems you've built and the limitations you accept.",
        aboutTyler: "Man, I see all this potential, and I see squandering. An entire generation pumping gas, waiting tables, debugging legacy code. REVOITZ isn't here to hold your hand. It's here to remind you that you're alive. You want a polite conference? Go somewhere else. You want to see what you're really made of? Step into the basement."
    },
    technical: {
        voice: "Edward (The Narrator)",
        intro: "Step one: identify the variables. Step two: control the execution flow. The illusion of safety is a syntax error. Here is where we test your parameters. Precision over passion.",
        events: [
            {
                id: "inquira",
                title: "INQUIRA",
                subtitle: "Technical Paper Presentation",
                tagline: "From Thought to Technology, Ideas Take Shape.",
                description: "You stand before the committee. Your hands might shake, but your data doesn't. This is where you compile your theories into reality. We are looking for the profound enclosed in the mundane. Bring your architecture. Defend your logic. Prove that your thoughts matter.",
                rules: [
                    "A team must consist of 2 to 3 members.",
                    "Presentations strictly limited to 5 minutes.",
                    "Abstracts must be submitted prior to the deadline. No late submissions.",
                    "Plagiarism is a critical failure. Provide citations.",
                    "Location: IT Department Main Hall."
                ],
                fee: "₹100 per team",
                type: "technical"
            },
            {
                id: "squidtech",
                title: "SQUIDTECH SURVIVAL",
                subtitle: "Station-Based Tech Escape",
                tagline: "Survive tech challenges across 5 levels.",
                description: "A labyrinth of logic. Five stations. Five variables you must control to avoid termination. Every stage is a compounding problem, an algorithm that threatens to infinite-loop your progress. You don't beat the game; you outlast the other instances.",
                rules: [
                    "Complete all 5 levels in sequence.",
                    "Usage of external internet resources is strictly monitored.",
                    "Time is logged. Fastest traversal wins.",
                    "Collaboration outside your unit will result in immediate voiding of your run."
                ],
                fee: "₹100 per team",
                type: "technical"
            },
            {
                id: "doodle",
                title: "DIGITAL DOODLE",
                subtitle: "Digital Poster Making",
                tagline: "The canvas is empty. Fill it with function.",
                description: "We are the middle children of history. No purpose or place. But here, you have an artboard. We give you a theme; you must architect a visual representation of it using your chosen tools. It's not just art. It's UI with a pulse.",
                rules: [
                    "Participants must bring their own devices and software.",
                    "Time limit: 60 minutes from theme announcement.",
                    "Must adhere strictly to the given technical theme.",
                    "Judging is based on creativity, alignment with the theme, and technical execution."
                ],
                fee: "₹50 per head",
                type: "technical"
            },
            {
                id: "breach",
                title: "BREACH HUNTERS",
                subtitle: "Digital Forensics / Traceback",
                tagline: "The trace is cold. Bring it back to the source.",
                description: "Every action leaves a log. Every footstep is a packet. The system has been compromised, and you are the diagnostic tool. Follow the breadcrumbs through the digital forensics trail to find the root cause. Do not blink.",
                rules: [
                    "Individual participation or teams of two.",
                    "Participants will be provided with dummy logs/scenarios.",
                    "First to identify the breach origin and vector wins.",
                    "Zero tolerance for destructive commands during the hunt."
                ],
                fee: "₹50 per head",
                type: "technical"
            },
            {
                id: "lucklogic",
                title: "LUCK LOGIC",
                subtitle: "Dice-Based Logic Challenge",
                tagline: "Where probability meets the CPU.",
                description: "You think you control the system, but the RNG controls you. We introduce entropy into your perfectly ordered logic. Roll the dice, solve the algorithm, and pray to whatever deterministic god you believe in.",
                rules: [
                    "Tasks are assigned based on a dice roll multiplier.",
                    "Logic puzzles scale in complexity based on your luck.",
                    "No calculators or compilers allowed for the first phase.",
                    "Speed and accurate probability calculation are key."
                ],
                fee: "₹50 per head",
                type: "technical"
            }
        ]
    },
    nonTechnical: {
        voice: "Tyler Durden",
        intro: "Welcome to Fight Club. The first rule of REVOITZ Non-Tech is: you do not ask for a syllabus. The second rule is: you DO NOT ask for a syllabus. We are going to strip away your khakis and your perfect GPAs. Let's see what happens when the electricity goes out.",
        events: [
            {
                id: "boxcricket",
                title: "BOX CRICKET",
                subtitle: "The Concrete Pitch",
                tagline: "Hit hard. Run fast. No apologies.",
                description: "We don't need a stadium. We just need a box and four walls to trap the energy. You've been sitting in lecture halls all month losing muscle mass. Time to pick up the bat and remind them you're alive. Sweat, swing, survive.",
                rules: [
                    "Standard Box Cricket rules apply. Modified over limits.",
                    "Tennis ball only. No protective gear allowed—just raw reflexes.",
                    "Umpire's decision is final. Argue, and you're out.",
                    "Knockout tournament format."
                ],
                fee: "₹200 per team",
                type: "non-technical"
            },
            {
                id: "checkmate",
                title: "CHECKMATE ARENA",
                subtitle: "Chess Competition",
                tagline: "Strategy Speaks Louder Than Speed.",
                description: "You have 64 squares to prove you aren't just another pawn. This isn't a game of luck; it's a game of psychological destruction. Look across the board. That guy wants to take everything from you. Take it from him first.",
                rules: [
                    "Solo event (1 member).",
                    "5 minutes per match (Blitz format).",
                    "Standard international chess rules apply.",
                    "Touch-move rule is strictly enforced. No takebacks in this life."
                ],
                fee: "₹50 per head",
                type: "non-technical"
            },
            {
                id: "striker",
                title: "STRIKER'S SHOWDOWN",
                subtitle: "Carrom Tournament",
                tagline: "Aim, Strike, Win.",
                description: "Precision violence on a wooden board. It's physics, momentum, and friction, stripped of all the pretentious equations. Flick the striker. Sink the coin. Dominate the board.",
                rules: [
                    "Solo event (1 member).",
                    "Standard carrom board rules apply.",
                    "Foul rules: sinking the striker results in a penalty coin loss.",
                    "First to reach the target points or clear the board wins the round."
                ],
                fee: "₹50 per head",
                type: "non-technical"
            },
            {
                id: "esports",
                title: "ZONE DOMINATORS",
                subtitle: "Esports (BGMI)",
                tagline: "Survive the zone. Eliminate the rest.",
                description: "Drop in. Loot up. Trust nobody but your squad. The digital zone is shrinking, and the only way out is through everyone else. It's raw, it's brutal, and you're going to love it. Bring your squad and let's see some chaos.",
                rules: [
                    "Squad (4 players) or Duo (2 players) registrations allowed.",
                    "Emulators are strictly prohibited. Mobile only.",
                    "Hacking, teaming with other squads, or exploiting bugs = Permanent Ban.",
                    "Points based on placement and kill count in classic battle royale."
                ],
                fee: "₹50 per head",
                type: "non-technical"
            }
        ]
    },
    coordinators: {
        faculty: [
            { name: "Unknown Faculty (Project Space)", role: "HOD / Event Lead" }
        ],
        students: [
            { name: "Student Rep 1", role: "Overall Coordinator", phone: "+91 99999 99999" },
            { name: "Student Rep 2", role: "Technical Lead", phone: "+91 88888 88888" }
        ]
    }
};
