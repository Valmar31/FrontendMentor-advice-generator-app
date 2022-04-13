import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

import { Container, Container2 } from "../styles/styles";

//typescript
type AdviceSlip = {
    slip_id: number;
    advice: string;
}

export function Home() {

    //Not working - with react-query
    const { data, isFetching } = useQuery<AdviceSlip[]>('slip', async () => {
        const response = await axios.get('https://api.adviceslip.com/advice');

        return response.data;
    });

    //working
    const [quote, setQuote] = useState("")
    const [id, setId] = useState("")

    async function getAdviceSlip() {
        const response = await axios.get("https://api.adviceslip.com/advice");
        setQuote(response.data.slip.advice);
        setId(response.data.slip.id);
        console.log(quote);
        console.log(id);
    }

    return (
        // Key for useQuery?
        <Container>
            <Container2>
                <h1>A D V I C E  # {id} </h1>
                <br />
                {/* Need style for blockquote - Margins */}
                <blockquote cite="https://api.adviceslip.com/advice">
                    {quote}
                </blockquote>
                <br />
                <img src="" alt="" />
                <br />
                <button onClick={getAdviceSlip}>
                    New Quote
                </button>
            </Container2>
        </Container>
    )
}