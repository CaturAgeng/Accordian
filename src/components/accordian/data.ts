interface AccordianData {
    id: string;
    question: string;
    answer: string;
}

const data : AccordianData [] = [
    {
        id : '1',
        question: "What are accordian components?",
        answer: "Accordian components are user interface elements user for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action."
    },
    {
        id : '2',
        question: "What are they used for?",
        answer: "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options."

    },
    {
        id : '3',
        question: "Accordian as a musical instrument?",
        answer: "The accordian is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres."
    },
    {
        id : '4',
        question: "Can i create an accordian component with a different framework?",
        answer: "Yes of course, it is very possible to create an accordian"
    }
];

export default data;