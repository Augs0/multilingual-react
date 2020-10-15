import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components"

function Chatbot(props) {
    const config = {
        width: "300px",
        height: "400px",
        floating: true
    };
    const theme = {
        background: '#fff',
        fontFamily: 'Arial',
        headerBgColor: 'crimson',
        headerFontColor: '#ffffff',
        headerFontSize: '15px',
        botBubbleColor: 'crimson',
        botFontColor: '#ffffff',
        userBubbleColor: '#fff',
        userFontColor: 'crimson',
    };
    const steps = [
        {
            id: 'Greet',
            message: 'Hello, welcome to Voyager Translations! How can we help?',
            trigger: 'Ask question'
        },
        {
            id: 'Ask question',
            message: 'Please choose from prices, services and quotes.',
            trigger: 'Waiting for first choice'
        },
        {
            id: 'Waiting for first choice',
            options: [
                { value: "prices", label: 'Prices', trigger: 'Prices' },
                { value: "services", label: 'Services', trigger: 'Services' },
                { value: "quotes", label: 'Quotes', trigger: 'Quotes' }
            ]
        },
        {
            id: "Prices",
            message: "Translation is priced at £9 per hour. Consecutive interpreting is priced at £10 per hour and simultaenous is priced at £15 per hour. Can we help with anything else?",
            trigger: "Asking for post-prices choice"
        },
        {
            id: "Asking for post-prices choice",
            options: [
                {
                    value: true,
                    label: "Yes",
                    trigger: "Back to choices"
                },
                {
                    value: "false",
                    label: "No",
                    trigger: "Done"
                }
            ]
        },
        {
            id: 'Back to choices',
            options: [
                { value: "prices", label: 'Prices', trigger: 'Prices' },
                { value: "services", label: 'Services', trigger: 'Services' },
                { value: "quotes", label: 'Quotes', trigger: 'Quotes' }
            ]
        },
        {
            id: "Services",
            message: "We offer consecutive and simultaeneous interpreting,creation of multilingual social media content, document translation, public health interpreting (e.g. in hospital), and legal interpreting. Can we help with anything else?",
            trigger: "Asking for post-services choice"
        },
        {
            id: "Asking for post-services choice",
            options: [
                {
                    value: true,
                    label: "Yes",
                    trigger: "Back to choices"
                },
                {
                    value: "false",
                    label: "No",
                    trigger: "Done"
                }
            ]
        },
        {
            id: "Quotes",
            message: "What service are you interested in?",
            trigger: "Waiting for quote choice"
        },
        {
            id: 'Waiting for quote choice',
            options: [
                { value: "translation", label: 'Translation', trigger: 'Translation quote' },
                { value: "consecutive", label: 'Consecutive', trigger: 'Consecutive quote' },
                { value: "simultaenous", label: 'Simultaenous', trigger: 'Simultaenous quote' }
            ]
        },
        {
            id: "Translation quote",
            message: "How many words need to be translated?",
            trigger: "Waiting for words"
        },
        {
            id: "Waiting for words",
            user: true,
            trigger: "Translation quote result"
        },
        {
            id: "Translation quote result",
            message: "It takes around one hour to translate 500 hours. To calculate the approximate pricing, calculate {previousValue}/500 * 9. Can we help with anything else?",
            trigger: "Asking for post-quotes choice"
        },
        {
            id: "Asking for post-quotes choice",
            options: [
                {
                    value: true,
                    label: "Yes",
                    trigger: "Back to choices"
                },
                {
                    value: "false",
                    label: "No",
                    trigger: "Done"
                }
            ]
        },
        {
            id: "Consecutive quote",
            message: "Consecutive interpreting is priced at £10 per hour, so calculate the approximate price by multiplying the hours of work by 10. Can we help with anything else?",
            trigger: "Asking for post-consecutive choice"
        },
        {
            id: "Asking for post-consecutive choice",
            options: [
                {
                    value: true,
                    label: "Yes",
                    trigger: "Back to choices"
                },
                {
                    value: "false",
                    label: "No",
                    trigger: "Done"
                }
            ]
        },
        {
            id: "Simultaenous quote",
            message: "Simultaenous interpreting is priced at £15 per hour, so calculate the approximate price by multiplying the hours of work by 15. Can we help with anything else?",
            trigger: "Asking for post-simultaenous choice"
        },
        {
            id: "Asking for post-simultaenous choice",
            options: [
                {
                    value: true,
                    label: "Yes",
                    trigger: "Back to choices"
                },
                {
                    value: "false",
                    label: "No",
                    trigger: "Done"
                }
            ]
        },
        {
            id: "Done",
            message: "Thanks for visiting us today!",
            end: true
        }
    ];
    return <ThemeProvider theme={theme}>
        <ChatBot steps={steps}{...config} />
    </ThemeProvider>
}

export default Chatbot;