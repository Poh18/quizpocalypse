export default {
    state: {
        profile: {
            username: "Poh18",
            fullName: "Kian Kerby Adrisola",
        },

        items: [
            {
                question: "Who invented Facebook",
                choices: {
                    A: "Mark Rommel",
                    B: "Nesjohn",
                    C: "Mark Zuckerberg"
                },
                correct: "B"
            },
            {
                question: "When was the first resident evil movie release?",
                choices: {
                    A: "2002",
                    B: "1999",
                    C: "2000"
                },
                correct: "A"
            },
            {
                question: "You hear on the radio that an invasion of zombies is coming. What would you do first?",
                choices: {
                    A: "Board up the house and stock up on supplies",
                    B: "Think it's a joke and sit back to watch T.V",
                    C: "Flee to the forest in terror."
                },
                correct: "B"
            },
            {
                question: "Zombies break into your base and start attacking your friends. What do you do?",
                choices: {
                    A: "Sacrifice yourself to save your friends.",
                    B: "Leave them and escapse to save yourself",
                    C: "Kill the zombies then check your group for bites."
                },
                correct: "B"
            },
            {
                question: "Your sister has been bitten. What do you do?",
                choices: {
                    A: "Say your sorry then kill her without hesitation.",
                    B: "Leave her behind",
                    C: "hug and kiss her"
                },
                correct: "A"
            },
            {
                question: "How big would your grould will be?",
                choices: {
                    A: "2-4 people. Easier to move around",
                    B: "I travel alone.",
                    C: "Anything that would work out well for me."
                },
                correct: "B"
            },
            {
                question: "You've been bitten and turning to a zombie. What would you do?",
                choices: {
                    A: "Don't tell anyone",
                    B: "Kill myself",
                    C: "Tell everyone goodbye then run away."
                },
                correct: "A"
            },
            {
                question: "You walk into a gun store but can only carry three weapons. What would you choose?",
                choices: {
                    A: "Nothing, I'm set.",
                    B: "Toothpick",
                    C: "Anything that would kill"
                },
                correct: "B"
            },
            {
                question: "The apocalypse is coming to an end but your whole group has died and nw you're surrounded. What would you do?",
                choices: {
                    A: "I would fight to the death",
                    B: "Try my hardest to escape, knowing this ordeal is coming to an end",
                    C: "All of the above"
                },
                correct: "A"
            },{
                question: "Supposed hat you have survived the Apocaypse but ave become unstable. You're walkiing outside when you notice someone pale and feverish. You know it is coming again. What would you do?",
                choices: {
                    A: "Kill myself",
                    B: "Kill the man right then and there",
                    C: "Do nothing and wait for the zombies"
                },
                correct: "C"
            },

            /*{
                question: "Question 1",
                choices: {
                    A: "Choice 1",
                    B: "Choice 2",
                    C: "Choice 3",
                    D: "Choice 4"
                },
                correct: "D"
            }, */
        ]
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};