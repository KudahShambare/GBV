import React from "react";
import {Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import questions from "../assets/JSON/faq.json";

const FAQ=()=>{
	return(
		<>
		<NavBar/>
<div className="pages">
<section id="faq-container" >

{questions.map((qn)=>{
    return (

<Accordion >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        {qn.question}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="faq-answer">
                    <p>
                      {qn.response}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
                  </Accordion>

        )
})}
        
 

</section>

</div>
<Footer/>
</>
		)
}
export default FAQ;